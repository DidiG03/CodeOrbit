export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag: (...args: unknown[]) => void;
  }
}

export function pageview(url: string): void {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === "undefined") return;
  window.gtag?.("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function event(
  action: string,
  {
    category,
    label,
    value,
  }: { category?: string; label?: string; value?: number }
): void {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === "undefined") return;
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}


