"use client";

import { useState } from "react";
import { StatsigProvider as StatsigProviderBase } from "@statsig/react-bindings";
import { StatsigClient } from "@statsig/js-client";
import { bootStatsig } from "@/lib/statsig";

/**
 * Wraps the app in the Statsig provider with auto-capture enabled.
 *
 * The client is created once (browser only, singleton guard) the first time
 * this renders on the client — before that, server render returns plain
 * children so SSR markup is unchanged.
 */
export function StatsigProvider({ children }: { children: React.ReactNode }) {
  const [client] = useState<StatsigClient | null>(() => {
    try {
      return bootStatsig();
    } catch {
      return null;
    }
  });

  if (!client) return <>{children}</>;
  return (
    <StatsigProviderBase client={client}>{children}</StatsigProviderBase>
  );
}
