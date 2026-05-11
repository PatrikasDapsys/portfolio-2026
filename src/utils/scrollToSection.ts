import type { MouseEvent } from 'react';

export function scrollToSectionById(id: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  element.scrollIntoView({
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
    block: 'start',
  });
  window.history.pushState(null, '', `#${id}`);
}

export function sectionIdFromLink(link: string) {
  return link.startsWith('#') ? link.slice(1) : link;
}

export function opensInNewTab(link: string, outsideLink = false) {
  return (
    outsideLink ||
    /^https?:\/\//i.test(link) ||
    link.startsWith('//') ||
    link.startsWith('/')
  );
}

export function handleInPageNavClick(event: MouseEvent<HTMLAnchorElement>) {
  const href = event.currentTarget.getAttribute('href');
  if (!href?.startsWith('#')) return;
  event.preventDefault();
  scrollToSectionById(href.slice(1));
}
