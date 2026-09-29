/// <reference path="../.astro/types.d.ts" />

interface Window {
  gtag?: (...args: any[]) => void;
  viparTrack?: (eventName: string, extra?: Record<string, unknown>) => boolean;
  viparLeadContext?: (extra?: Record<string, unknown>) => Record<string, unknown>;
  viparBuildWhatsappUrl?: (rawHref: string, extra?: Record<string, unknown>) => string;
  __viparTrackingInitialized?: boolean;
  __viparAnalyticsConsent?: boolean;
  __viparPosthogReady?: boolean;
  posthog?: {
    capture: (name: string, properties?: Record<string, unknown>) => void;
    opt_in_capturing?: (options?: Record<string, unknown>) => void;
    opt_out_capturing?: () => void;
  };
}
