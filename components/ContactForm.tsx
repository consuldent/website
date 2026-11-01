"use client";

import { useRef, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore/lite";
import { ArrowRight, Check } from "lucide-react";
import {
  logContactFormStarted,
  logContactFormSubmitted,
} from "@/lib/statsig";

export type Purpose = "call" | "callback" | "summary" | "question" | "training";

const purposes: { value: Purpose; label: string }[] = [
  { value: "call", label: "Call me for a 15-minute chat" },
  { value: "callback", label: "Call me back at a time that suits me" },
  {
    value: "summary",
    label: "Send me the one-page summary (no call needed)",
  },
  { value: "question", label: "I have a question first - reply by email" },
  { value: "training", label: "Training for our team" },
];

/** Purposes where someone on our side has to ring the contact. */
const needsPhone: Purpose[] = ["call", "callback"];

const bottlenecks = [
  "Missed or unanswered calls",
  "Recalls and patient reactivation",
  "Front desk conversion",
  "Systems, PMS and AI",
  "Team training and standards",
  "Not sure yet",
];

const callTimes = [
  "Morning (8am-12pm)",
  "Midday (12pm-2pm)",
  "Afternoon (2pm-5pm)",
  "After 5pm",
  "Any time",
];

type Props = {
  /** Optional engagement model passed from /services, e.g. "audit". */
  intent?: string;
};

const initialForm = {
  name: "",
  practiceName: "",
  email: "",
  phone: "",
  purpose: "",
  bottleneck: "",
  preferredTime: "",
  message: "",
};

const successCopy: Record<string, { title: string; body: string }> = {
  call: {
    title: "Request sent.",
    body: "I'll email you two times that work. Nothing else needed from you.",
  },
  callback: {
    title: "Received.",
    body: "I'll call you on the number you gave me. If it's busy, I'll leave a message and a text.",
  },
  summary: {
    title: "Received.",
    body: "You'll get a one-page summary of the three things I'd change first - by email, no call, no selling.",
  },
  question: {
    title: "Received.",
    body: "I'll reply personally. It may take a day, you won't end up on a list.",
  },
  training: {
    title: "Received.",
    body: "I'll email you what a program looks like for a practice like yours, with a fee.",
  },
};

function collectSource() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    referrer: typeof document !== "undefined" ? document.referrer : "",
    sourcePath: window.location.pathname + window.location.search,
  };
}

export default function ContactForm({ intent }: Props) {
  const [formData, setFormData] = useState(initialForm);
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [sentData, setSentData] = useState(initialForm);
  const [errorMessage, setErrorMessage] = useState("");

  // First meaningful interaction with the form = top-of-funnel signal.
  const formStartedRef = useRef(false);
  const handleFirstInteraction = () => {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    logContactFormStarted();
  };

  const phoneRequired = needsPhone.includes(formData.purpose as Purpose);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (!formStartedRef.current) handleFirstInteraction();
  };

  const mailtoBody = (data: typeof initialForm) =>
    [
      `What can I do: ${data.purpose}`,
      `Name: ${data.name}`,
      `Practice: ${data.practiceName}`,
      `Best number: ${data.phone || "n/a"}`,
      `Email: ${data.email}`,
      `Biggest bottleneck: ${data.bottleneck}`,
      `Best time to call: ${data.preferredTime || "n/a"}`,
      "",
      data.message,
    ].join("\n");

  const mailtoFallback = () =>
    `mailto:vrinda@consuldent.com.au?subject=${encodeURIComponent(
      "Request from consuldent.com.au"
    )}&body=${encodeURIComponent(mailtoBody(formData))}`;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Honeypot: real people never fill this in.
    if (honeypot) {
      setSentData(formData);
      setSent(true);
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      await addDoc(collection(db, "webForms"), {
        ...formData,
        intent: intent || "general",
        host: "consuldent.com.au",
        type: "contact",
        page: "/contact",
        ...collectSource(),
        created: new Date().toISOString(),
      });

      setSentData(formData);
      setSent(true);
      setFormData(initialForm);
      logContactFormSubmitted({
        formPurpose: formData.purpose || "unset",
        hasPhone: formData.phone ? "yes" : "no",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      setErrorMessage(
        "That didn't send. Rather than lose it, email me directly and I'll pick it up."
      );
    }
    setLoading(false);
  };

  if (sent) {
    const done = successCopy[sentData.purpose] ?? successCopy.question;
    return (
      <div className="bg-paper border border-line rounded-2xl p-8 md:p-10">
        <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-6">
          <Check className="w-5 h-5 text-accent" strokeWidth={2.5} />
        </div>
        <h2 className="font-display text-3xl font-medium text-ink">
          {done.title}
        </h2>
        <p className="text-muted mt-3 leading-relaxed">{done.body}</p>
        {needsPhone.includes(sentData.purpose as Purpose) && (
          <p className="text-muted mt-2 leading-relaxed">
            If you miss it, email{" "}
            <a
              href="mailto:vrinda@consuldent.com.au"
              className="text-accent underline underline-offset-2"
            >
              vrinda@consuldent.com.au
            </a>{" "}
            and we&apos;ll rebook.
          </p>
        )}
        <p className="text-sm text-muted mt-6 pt-6 border-t border-line">
          That&apos;s the only thing this form is for. No newsletter, no sequence.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-paper border border-line rounded-2xl p-6 md:p-8"
    >
      <h2 className="font-display text-2xl md:text-3xl font-medium text-ink">
        Tell me what you need.
      </h2>
      <p className="text-sm text-muted mt-2">
        Two minutes. If we&apos;re not a fit, I&apos;ll tell you that too.
      </p>

      {/* Purpose drives everything else on this form. */}
      <div className="mt-6">
        <label
          htmlFor="purpose"
          className="block text-sm font-medium text-ink mb-1.5"
        >
          What can I do for you? <span className="text-accent">*</span>
        </label>
        <select
          id="purpose"
          name="purpose"
          required
          value={formData.purpose}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-line rounded-lg bg-white text-ink focus:outline-none focus:border-accent"
        >
          <option value="">Choose one</option>
          {purposes.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Your name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-line rounded-lg bg-white text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent"
            placeholder="Dr Jane Smith"
          />
        </div>

        <div>
          <label
            htmlFor="practiceName"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Practice
          </label>
          <input
            id="practiceName"
            name="practiceName"
            type="text"
            autoComplete="organization"
            value={formData.practiceName}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-line rounded-lg bg-white text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent"
            placeholder="Practice name &amp; suburb"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-line rounded-lg bg-white text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent"
            placeholder="you@practice.com.au"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Your number{" "}
            {phoneRequired ? (
              <span className="text-accent">*</span>
            ) : (
              <span className="text-muted font-normal">(optional)</span>
            )}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required={phoneRequired}
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-line rounded-lg bg-white text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent"
            placeholder="04xx xxx xxx"
          />
          <p className="text-xs text-muted mt-1.5">
            We call you from here - our number isn&apos;t printed anywhere on the
            site.
          </p>
        </div>

        <div>
          <label
            htmlFor="bottleneck"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            What&apos;s hurting most?
          </label>
          <select
            id="bottleneck"
            name="bottleneck"
            value={formData.bottleneck}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-line rounded-lg bg-white text-ink focus:outline-none focus:border-accent"
          >
            <option value="">Select one (optional)</option>
            {bottlenecks.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="preferredTime"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Best time to call{" "}
            <span className="text-muted font-normal">(optional)</span>
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-line rounded-lg bg-white text-ink focus:outline-none focus:border-accent"
          >
            <option value="">Any time</option>
            {callTimes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink mb-1.5"
        >
          Anything I should know before we speak?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2.5 border border-line rounded-lg bg-white text-ink placeholder:text-muted/60 focus:outline-none focus:border-accent"
          placeholder="Optional. One or two lines is plenty."
        />
      </div>

      {/* Honeypot - hidden from people, visible to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium hover:bg-accent/90 transition-colors disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send"}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>

      {errorMessage && (
        <div className="mt-4 text-sm">
          <p className="text-accent">{errorMessage}</p>
          <a
            href={mailtoFallback()}
            className="inline-flex items-center gap-1.5 mt-2 font-medium text-ink underline underline-offset-2"
          >
            Email it instead
          </a>
        </div>
      )}

      <p className="text-xs text-muted mt-4 leading-relaxed">
        I use this only to reply about your practice. No list, no sequence.{" "}
        <a
          href="/privacy"
          className="underline underline-offset-2 hover:text-ink"
        >
          Privacy
        </a>
      </p>
    </form>
  );
}
