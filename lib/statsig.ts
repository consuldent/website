/**
 * Deep Statsig analytics for the Consuldent site.
 *
 * Built on @statsig/js-client + @statsig/web-analytics (StatsigAutoCapturePlugin),
 * which automatically captures for every event: page views + SPA route changes,
 * clicks (incl. dead/rage clicks), form submits, JS errors, Core Web Vitals,
 * copy events, session start & engagement time, scroll depth, viewport/screen
 * size, locale, timezone, referrer + full utm_* / click-ID decode.
 *
 * On top of that we add:
 *  - first-touch attribution across repeat visits (localStorage)
 *  - IP-based geo (city/region/country) attached to the Statsig user
 *  - semantic funnel events (cta_click, contact_form_*)
 *  - per-event metadata enrichment of first-touch + geo, via pre_logs_flushed
 */
import { StatsigClient } from "@statsig/js-client";
import { StatsigAutoCapturePlugin } from "@statsig/web-analytics";

export const STATSIG_CLIENT_KEY =
  "client-rqcWKQV0i8S25I5nb8s5EkLohIfW6f87hufNwXsJctc";

const FIRST_TOUCH_KEY = "consuldent_statsig_first_touch";

/* ------------------------------------------------------------------ */
/* First-touch attribution (repeat-visit tracker)                      */
/* ------------------------------------------------------------------ */
export type FirstTouch = {
  firstReferrer: string;
  firstLandingPage: string;
  firstUtmSource: string;
  firstUtmMedium: string;
  firstUtmCampaign: string;
  firstClickId: string;
  visitCount: number;
  lastReferrer: string;
};

export function readOrInitFirstTouch(): FirstTouch {
  const referrer = document.referrer || "direct";
  const params = new URLSearchParams(window.location.search);
  const utm = (name: string) => params.get(name) || "";
  const clickIds: Record<string, string> = {};
  for (const id of [
    "gclid",
    "fbclid",
    "msclkid",
    "ttclid",
    "li_fat_id",
    "irclid",
    "twclid",
  ]) {
    const v = params.get(id);
    if (v) clickIds[id] = v;
  }
  const clickId = Object.values(clickIds)[0] ?? "";

  let prev: Partial<FirstTouch> = {};
  try {
    const raw = window.localStorage.getItem(FIRST_TOUCH_KEY);
    if (raw) prev = JSON.parse(raw);
  } catch {
    /* ignore corrupt storage */
  }

  const firstTouch: FirstTouch = {
    firstReferrer: prev.firstReferrer || referrer,
    firstLandingPage: prev.firstLandingPage || window.location.pathname,
    firstUtmSource: prev.firstUtmSource || utm("utm_source"),
    firstUtmMedium: prev.firstUtmMedium || utm("utm_medium"),
    firstUtmCampaign: prev.firstUtmCampaign || utm("utm_campaign"),
    firstClickId: prev.firstClickId || clickId,
    visitCount: (prev.visitCount ?? 0) + 1,
    lastReferrer: referrer,
  };

  try {
    window.localStorage.setItem(FIRST_TOUCH_KEY, JSON.stringify(firstTouch));
  } catch {
    /* storage may be blocked */
  }

  return firstTouch;
}

export function getFirstTouch(): FirstTouch | null {
  try {
    const raw = window.localStorage.getItem(FIRST_TOUCH_KEY);
    return raw ? (JSON.parse(raw) as FirstTouch) : null;
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------------ */
/* Client singleton (created once, browser only)                       */
/* ------------------------------------------------------------------ */
let cachedClient: StatsigClient | null = null;
let booted = false;

export function getOrCreateStatsigClient(): StatsigClient {
  if (cachedClient) return cachedClient;

  const firstTouch = readOrInitFirstTouch();

  const user = {
    userID: "anonymous",
    custom: {
      first_referrer: firstTouch.firstReferrer,
      first_landing_page: firstTouch.firstLandingPage,
      first_utm_source: firstTouch.firstUtmSource,
      first_utm_medium: firstTouch.firstUtmMedium,
      first_utm_campaign: firstTouch.firstUtmCampaign,
      first_click_id: firstTouch.firstClickId,
      visit_count: String(firstTouch.visitCount),
    } as Record<string, string>,
  };

  cachedClient = new StatsigClient(STATSIG_CLIENT_KEY, user, {
    plugins: [new StatsigAutoCapturePlugin()],
  });

  // Wrap in try/catch so analytics can never break the page.
  try {
    cachedClient.initializeAsync().catch(() => {
      /* init failures are non-fatal for a marketing site */
    });
  } catch {
    /* ignore */
  }

  return cachedClient;
}

/** One-time setup: event enrichment + page-flush hooks. */
export function bootStatsig(): StatsigClient | null {
  if (typeof window === "undefined") return null;
  if (booted) return getOrCreateStatsigClient();
  booted = true;

  const client = getOrCreateStatsigClient();

  // Delegated click tracking for primary CTAs:
  // any <a data-cta="..."> anywhere in the document logs a cta_click.
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a[data-cta]") as HTMLAnchorElement | null;
      if (!anchor) return;
      logCtaClick(
        anchor.getAttribute("data-cta") || "unknown",
        anchor.getAttribute("href") || ""
      );
    },
    { capture: true }
  );

  // Attach first-touch to EVERY queued event right before it is sent.
  // (events already carry geo via the enriched user object)
  client.on("pre_logs_flushed", ({ events }) => {
    const touch = getFirstTouch();
    for (const event of events) {
      if (String(event.eventName ?? "").startsWith("statsig::")) continue;
      const metadata = (event.metadata ?? {}) as Record<string, unknown>;
      event.metadata = {
        ...metadata,
        ...(touch
          ? {
              ft_referrer: touch.firstReferrer,
              ft_landing_page: touch.firstLandingPage,
              ft_utm_source: touch.firstUtmSource,
              ft_utm_campaign: touch.firstUtmCampaign,
              visit_count: touch.visitCount,
            }
          : {}),
      };
    }
  });

  hydrateGeoIntoClient(client);

  return client;
}

export function getStatsigClient(): StatsigClient | null {
  if (cachedClient) return cachedClient;
  try {
    return getOrCreateStatsigClient();
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------------ */
/* Geo (loaded in components/statsig-geo.ts)                           */
/* ------------------------------------------------------------------ */
export type GeoInfo = {
  ip: string;
  city: string;
  region: string;
  country: string;
  countryCode: string;
  timezone: string;
};

const GEO_KEY = "consuldent_statsig_geo";
const GEO_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

/*
 * Provider fallback chain. The site is fully static (no origin server we
 * control), so "server fallback" here means falling back across alternate
 * geo servers — ipapi.co's free tier is rate-limited per calling IP, and
 * proxying through a single origin function would funnel ALL visitors
 * through one shared quota and rate-limit the whole site faster. A
 * per-visitor fallback to the next free provider degrades gracefully:
 * each provider gets a 4s timeout, and one that returns 429 (or any
 * non-OK) is placed in a short backoff stored in localStorage so repeat
 * navigations don't immediately re-try the rate-limited endpoint.
 */
type GeoProvider = {
  name: string;
  url: string;
  parse: (d: Record<string, unknown>) => { ip: string; city: string; region: string; country: string; countryCode: string; timezone: string } | null;
};

const GEO_PROVIDERS: GeoProvider[] = [
  {
    name: "ipapi.co",
    url: "https://ipapi.co/json/",
    parse: (d) =>
      d.ip && d.country_code
        ? {
            ip: String(d.ip),
            city: String(d.city ?? ""),
            region: String(d.region ?? ""),
            country: String(d.country_name ?? ""),
            countryCode: String(d.country_code ?? ""),
            timezone: String(d.timezone ?? ""),
          }
        : null,
  },
  {
    name: "ipwho.is",
    url: "https://ipwho.is/",
    parse: (d) => {
      if (!(d.ip && d.country_code) || d.success === false) return null;
      const tz = d.timezone as Record<string, unknown> | undefined;
      return {
        ip: String(d.ip),
        city: String(d.city ?? ""),
        region: String(d.region ?? ""),
        country: String(d.country ?? ""),
        countryCode: String(d.country_code ?? ""),
        timezone: String(tz?.id ?? ""),
      };
    },
  },
  {
    name: "geojs.io",
    url: "https://get.geojs.io/v1/ip/geo.json",
    parse: (d) =>
      d.ip && d.country_code
        ? {
            ip: String(d.ip),
            city: String(d.city ?? ""),
            region: String(d.region ?? ""),
            country: String(d.country ?? ""),
            countryCode: String(d.country_code ?? ""),
            timezone: String(d.timezone ?? ""),
          }
        : null,
  },
  {
    name: "freeipapi.com",
    url: "https://free.freeipapi.com/api/json",
    parse: (d) =>
      d.ip && d.countryCode
        ? {
            ip: String(d.ip),
            city: String(d.cityName ?? ""),
            region: String(d.regionName ?? ""),
            country: String(d.countryName ?? ""),
            countryCode: String(d.countryCode ?? ""),
            timezone: String(d.timezone ?? ""),
          }
        : null,
  },
];

/* Backoff memory so we don't re-try a rate-limited provider on every nav. */
const GEO_BACKOFF_KEY = "consuldent_statsig_geo_backoff";
const PROVIDER_BACKOFF_MS = 60 * 60 * 1000; // 1h after a failure
const CHAIN_BACKOFF_MS = 30 * 60 * 1000; // 30min when ALL providers fail

function readGeoBackoff(): { providers: Record<string, number>; chain: number } {
  try {
    const raw = window.localStorage.getItem(GEO_BACKOFF_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    /* ignore */
  }
  return { providers: {}, chain: 0 };
}

function storeGeoBackoff(b: { providers: Record<string, number>; chain: number }) {
  try {
    window.localStorage.setItem(GEO_BACKOFF_KEY, JSON.stringify(b));
  } catch {
    /* ignore */
  }
}

export function getGeoCache(): GeoInfo | null {
  try {
    const raw = window.localStorage.getItem(GEO_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { at: number; info: GeoInfo };
    if (Date.now() - parsed.at > GEO_MAX_AGE_MS) return null;
    return parsed.info;
  } catch {
    return null;
  }
}

function cacheGeo(info: GeoInfo) {
  try {
    window.localStorage.setItem(
      GEO_KEY,
      JSON.stringify({ at: Date.now(), info })
    );
  } catch {
    /* ignore */
  }
}

/**
 * Fetches low-resolution IP geo once per week (falling back across alternate
 * geo servers when the primary is rate-limited) and attaches it to the
 * Statsig user (ip, country, locale) + custom fields (city/region).
 * Non-blocking and fully silent on failure — analytics must never degrade
 * the site.
 */
export async function hydrateGeoIntoClient(client: StatsigClient) {
  let info = getGeoCache();

  if (!info) {
    const backoff = readGeoBackoff();
    const now = Date.now();
    if (backoff.chain > now) return; // everything failed recently — sit out

    for (const provider of GEO_PROVIDERS) {
      if ((backoff.providers[provider.name] ?? 0) > now) continue;
      try {
        const controller = new AbortController();
        const timer = window.setTimeout(() => controller.abort(), 4000);
        const res = await fetch(provider.url, { signal: controller.signal });
        window.clearTimeout(timer);
        if (!res.ok) {
          // 429 (rate-limited) or any other non-OK: back off this provider.
          backoff.providers[provider.name] = now + PROVIDER_BACKOFF_MS;
          storeGeoBackoff(backoff);
          continue;
        }
        const data = (await res.json()) as Record<string, unknown>;
        const parsed = provider.parse(data);
        if (!parsed) {
          backoff.providers[provider.name] = now + PROVIDER_BACKOFF_MS;
          storeGeoBackoff(backoff);
          continue;
        }
        info = parsed;
        cacheGeo(info);
        break;
      } catch {
        // offline, blocked, aborted — record failure and try the next one
        backoff.providers[provider.name] = now + PROVIDER_BACKOFF_MS;
        storeGeoBackoff(backoff);
      }
    }
    if (!info) {
      // Whole chain exhausted — stop retrying for a while.
      storeGeoBackoff({ providers: backoff.providers, chain: now + CHAIN_BACKOFF_MS });
      return;
    }
  }

  try {
    await client.updateUserAsync({
      userID: "anonymous",
      ip: info.ip,
      country: info.countryCode,
      locale: navigator.language,
      userAgent: navigator.userAgent,
      custom: {
        city: info.city,
        region: info.region,
        country: info.country,
      },
    });
  } catch {
    /* ignore */
  }
}

/* ------------------------------------------------------------------ */
/* Semantic funnel events                                              */
/* ------------------------------------------------------------------ */
const CLIENT = () => {
  try {
    return getOrCreateStatsigClient();
  } catch {
    return null;
  }
};

/** Fired when a primary CTA ("Book a free call" / nav / mobile bar) is clicked. */
export function logCtaClick(ctaLocation: string, href: string) {
  CLIENT()?.logEvent("cta_click", href, {
    cta_location: ctaLocation,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

/** Fired the first time the visitor interacts with the contact form. */
export function logContactFormStarted() {
  CLIENT()?.logEvent("contact_form_started", "1", {
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

/** Fired on successful contact-form submission. */
export function logContactFormSubmitted(fields: {
  formPurpose: string;
  hasPhone: string;
}) {
  const touch = getFirstTouch();
  CLIENT()?.logEvent("contact_form_submitted", fields.formPurpose, {
    form_purpose: fields.formPurpose,
    has_phone: fields.hasPhone,
    ft_utm_source: touch?.firstUtmSource ?? "",
    ft_utm_campaign: touch?.firstUtmCampaign ?? "",
    first_referrer: touch?.firstReferrer ?? "",
  });
}
