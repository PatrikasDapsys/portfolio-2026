import type { MouseEvent } from 'react';
import { handleInPageNavClick, opensInNewTab } from '../../utils/scrollToSection';
import './FooterSection.scss';

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/patrikasdapsys' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/patrikas-dapsys/' },
  { label: 'Resume', href: '/documents/patrikas-dapsys-cv.pdf' },
  { label: 'Contact', href: '#contact' },
];

export function FooterSection() {
  const currentYear = new Date().getFullYear();
  const handleScrollTopClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <a
        className="footer__scroll-top"
        href="#"
        aria-label="Back to top"
        onClick={handleScrollTopClick}
      >
        <svg
          className="footer__scroll-top-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3l137.4 137.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          />
        </svg>
      </a>

      <nav className="footer__links" aria-label="Footer links">
        {footerLinks.map((link) => (
          <a
            className="footer__link"
            key={link.label}
            href={link.href}
            target={opensInNewTab(link.href) ? '_blank' : undefined}
            rel={opensInNewTab(link.href) ? 'noopener noreferrer' : undefined}
            onClick={link.href.startsWith('#') ? handleInPageNavClick : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <p className="footer__copyright">Copyright © Patrikas Dapšys {currentYear}</p>
    </footer>
  );
}
