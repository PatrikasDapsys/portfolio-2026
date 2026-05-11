import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
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
        <FontAwesomeIcon icon={faAngleUp} size="xs" />
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
