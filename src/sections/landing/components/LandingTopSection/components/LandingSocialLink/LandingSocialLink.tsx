import './LandingSocialLink.scss';
import type { MouseEvent } from 'react';
import { SocialIcon, type SocialIconName } from './SocialIcon';
import {
  opensInNewTab,
  scrollToSectionById,
  sectionIdFromLink,
} from '../../../../../../utils/scrollToSection';
import { trackOutboundClick } from '../../../../../../utils/analytics';

type LandingSocialLinkProps = {
  iconName: SocialIconName;
  label: string;
  link: string;
  outsideLink?: boolean;
};

export function LandingSocialLink({ iconName, label, link, outsideLink = false }: LandingSocialLinkProps) {
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
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackOutboundClick(link, label)}
        >
          <span className="landing-social-link__text highlight">{label}</span>
          <SocialIcon name={iconName} />
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
        aria-label={label}
        onClick={handleSectionClick}
      >
        <span className="landing-social-link__text highlight">{label}</span>
        <SocialIcon name={iconName} />
      </a>
    </li>
  );
}
