import './LandingTopSection.scss';
import { HackerWord } from '../../../../components/HackerWord/HackerWord';
import { LandingSocialLink } from './components/LandingSocialLink/LandingSocialLink';
import { useMediaQuery } from '../../../../utils/useMediaQuery';

const TITLE_TEXT = 'Patrikas Dapšys';

/** Matches `breakpoints.$breakpoint-md` — skip HackerWord below tablet width. */
const HACKER_WORD_MEDIA = '(min-width: 768px)';

export function LandingTopSection() {
  const enableHackerWord = useMediaQuery(HACKER_WORD_MEDIA);

  return (
    <div className="landing__top-section">
      <div className="landing__top-section--left">
        <h1 className="landing__title">
          {enableHackerWord ? (
            <HackerWord
              text={TITLE_TEXT}
              retriggerOnHover
              scrambleIntervalMs={100}
              resolveIntervalMs={80}
            />
          ) : (
            TITLE_TEXT
          )}
        </h1>
        <p className="landing__description">
          I'm a <span className="highlight">Frontend software engineer</span> with a strong{' '}
          <span className="highlight">passion</span> for building web applications with
          <span className="highlight"> great user experiences</span>.
        </p>
      </div>
      <div className="landing__top-section--right">
        <ul className="landing__social-links">
          <LandingSocialLink
            iconName="envelope"
            label="Email"
            link="contact"
          />
          <LandingSocialLink
            iconName="github"
            label="GitHub"
            link="https://github.com/patrikasdapsys"
          />
          <LandingSocialLink
            iconName="linkedin"
            label="LinkedIn"
            link="https://www.linkedin.com/in/patrikas-dapsys/"
          />
          <LandingSocialLink
            iconName="file-lines"
            label="Resume"
            link="/documents/patrikas-dapsys-cv.pdf"
          />
        </ul>
      </div>
    </div>
  );
}
