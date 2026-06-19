/// <reference path="../.astro/types.d.ts" />

interface Window {
  gtag?: (...args: any[]) => void;
  viparTrack?: (eventName: string, extra?: Record<string, unknown>) => void;
  viparLeadContext?: (extra?: Record<string, unknown>) => Record<string, unknown>;
  viparBuildWhatsappUrl?: (rawHref: string, extra?: Record<string, unknown>) => string;
  __viparServicePageViewed?: boolean;
}
