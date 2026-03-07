export const GA_MEASUREMENT_ID = "G-X62XC7MSLY";

export function trackCta(label: string, location: string) {
  window.gtag?.("event", "cta_click", {
    cta_label: label,
    cta_location: location,
  });
}

export function trackSectionView(sectionName: string) {
  window.gtag?.("event", "section_viewed", {
    section_name: sectionName,
  });
}

export function trackScrollDepth(percent: number) {
  window.gtag?.("event", "scroll_depth", {
    depth_percent: percent,
  });
}

export function trackOutboundClick(url: string, text: string) {
  window.gtag?.("event", "outbound_click", {
    link_url: url,
    link_text: text,
  });
}

export function trackAppNavigation(url: string, text: string) {
  window.gtag?.("event", "app_navigation", {
    link_url: url,
    link_text: text,
  });
}
