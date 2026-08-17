"use client";

import { StatsigProvider as StatsigProviderBase } from "@statsig/react-bindings";

export function StatsigProvider({ children }: { children: React.ReactNode }) {
  return (
    <StatsigProviderBase
      sdkKey="client-rqcWKQV0i8S25I5nb8s5EkLohIfW6f87hufNwXsJctc"
      user={{ userID: "anonymous" }}
    >
      {children}
    </StatsigProviderBase>
  );
}
