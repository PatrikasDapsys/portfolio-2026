import './ExperienceEntry.scss';

type ExperienceEntryProps = {
  title: string;
  date: string;
  description: string;
  reversed?: boolean;
};

export function ExperienceEntry({
  title,
  date,
  description,
  reversed = false,
}: ExperienceEntryProps) {
  const className = `experience-entry${reversed ? ' experience-entry--reversed' : ''}`;

  return (
    <article className={className}>
      <div className="experience-entry__top">{title}</div>
      <div className="experience-entry__middle">
        <span className="experience-entry__circle" aria-hidden="true" />
        <div className="experience-entry__separator-container">
          <div className="experience-entry__date">{date}</div>
          <span className="experience-entry__separator" />
        </div>
      </div>
      <div className="experience-entry__bottom">{description}</div>
    </article>
  );
}
