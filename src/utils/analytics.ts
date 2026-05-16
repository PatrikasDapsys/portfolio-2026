const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const ENABLED = Boolean(GA_ID);

export function initAnalytics() {
  if (!ENABLED) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (!ENABLED || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

export function trackSectionView(sectionId: string) {
  trackEvent('section_view', { section: sectionId });
}

export function trackOutboundClick(url: string, linkText?: string) {
  trackEvent('click', { link_url: url, link_text: linkText ?? '' });
}
