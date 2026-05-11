import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import type { MouseEvent } from 'react';
import './FooterSection.scss';

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/patrikasdapsys' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/patrikas-dapsys/' },
  { label: 'Resume', href: 'https://www.linkedin.com/in/patrikas-dapsys/' },
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
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <p className="footer__copyright">Copyright © Patrikas Dapšys {currentYear}</p>
    </footer>
  );
}
