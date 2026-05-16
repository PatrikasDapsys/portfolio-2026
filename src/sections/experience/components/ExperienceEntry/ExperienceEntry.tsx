import { trackOutboundClick } from '../../../../utils/analytics';
import './ExperienceEntry.scss';

type ExperienceEntryProps = {
  title: string;
  date: string;
  bullets: string[];
  reversed?: boolean;
  employerName?: string;
  employerWebsite?: string;
};

export function ExperienceEntry({
  title,
  date,
  bullets,
  reversed = false,
  employerName = '',
  employerWebsite = '',
}: ExperienceEntryProps) {
  const className = `experience-entry${reversed ? ' experience-entry--reversed' : ''}`;
  const hasEmployer = employerName && employerWebsite;

  return (
    <article className={className}>
      <div className="experience-entry__top">{title}</div>
      <div className="experience-entry__middle">
        <span className="experience-entry__circle" aria-hidden="true" />
        <div className="experience-entry__separator-container">
          <div className={`experience-entry__extra-container${!hasEmployer ? ' experience-entry__extra-container--solo' : ''}`}>
            <div className="experience-entry__date">{date}</div>
            {hasEmployer && (
              <div className="experience-entry__employer">
                <a
                  href={employerWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOutboundClick(employerWebsite, employerName)}
                >
                  {employerName}
                </a>
              </div>
            )}
          </div>
          <span className="experience-entry__separator" />
        </div>
      </div>
      <div className="experience-entry__bottom">
        <ul className="experience-entry__bullets">
          {bullets.map((text, index) => (
            <li key={index} className="experience-entry__bullet">
              {text}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
