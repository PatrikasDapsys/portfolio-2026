import './LandingTopSection.scss';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { HackerWord } from '../../../../components/HackerWord/HackerWord';
import { LandingSocialLink } from './components/LandingSocialLink/LandingSocialLink';

export function LandingTopSection() {
  return (
    <div className="landing__top-section">
      <div className="landing__top-section--left">
        <h1 className="landing__title">
          <HackerWord text="Patrikas Dapšys" retriggerOnHover scrambleIntervalMs={100} resolveIntervalMs={80} />
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
            icon={faEnvelope}
            label="Email"
            link="contact"
          />
          <LandingSocialLink
            icon={faGithub}
            label="GitHub"
            link="https://github.com/patrikasdapsys"
          />
          <LandingSocialLink
            icon={faLinkedin}
            label="LinkedIn"
            link="https://www.linkedin.com/in/patrikas-dapsys/"
          />
          <LandingSocialLink
            icon={faFileLines}
            label="Resume"
            link="/documents/patrikas-dapsys-cv.pdf"
          />
        </ul>
      </div>
    </div>
  );
}
