import './LandingSocialLink.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { MouseEvent } from 'react';
import { scrollToSectionById } from '../../../../../../utils/scrollToSection';

type LandingSocialLinkProps = {
  icon: IconProp;
  label: string;
  link: string;
  outsideLink?: boolean;
};

function sectionIdFromLink(link: string) {
  return link.startsWith('#') ? link.slice(1) : link;
}

function opensInNewTab(link: string, outsideLink: boolean) {
  return (
    outsideLink ||
    /^https?:\/\//i.test(link) ||
    link.startsWith('//') ||
    link.startsWith('/')
  );
}

export function LandingSocialLink({ icon, label, link, outsideLink = false }: LandingSocialLinkProps) {
  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSectionById(sectionIdFromLink(link));
  };

  if (opensInNewTab(link, outsideLink)) {
    return (
      <li className="landing-social-link">
        <a
          className="landing-social-link__container"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="landing-social-link__text highlight">{label}</span>
          <FontAwesomeIcon icon={icon} />
        </a>
      </li>
    );
  }

  const sectionId = sectionIdFromLink(link);
  const href = `#${sectionId}`;

  return (
    <li className="landing-social-link">
      <a
        className="landing-social-link__container"
        href={href}
        onClick={handleSectionClick}
      >
        <span className="landing-social-link__text highlight">{label}</span>
        <FontAwesomeIcon icon={icon} />
      </a>
    </li>
  );
}
