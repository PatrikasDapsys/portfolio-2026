import './LandingBottomSection.scss';
import { handleInPageNavClick } from '../../../../utils/scrollToSection';

export function LandingBottomSection() {
  return (
    <div className="landing__bottom-section">
      <div className="landing__bottom-section--left">
        <ul className="landing__bottom-section-list">
          <li className="landing__bottom-section-list-item">
            <a
              href="#summary"
              className="landing__bottom-section-link"
              onClick={handleInPageNavClick}
            >
              Summary
            </a>
          </li>
          <li className="landing__bottom-section-list-item">
            <a
              href="#experience"
              className="landing__bottom-section-link"
              onClick={handleInPageNavClick}
            >
              Experience
            </a>
          </li>
          <li className="landing__bottom-section-list-item">
            <a
              href="#contact"
              className="landing__bottom-section-link"
              onClick={handleInPageNavClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <h2 className="landing__bottom-section--right">
        Frontend <br />
        software engineer
      </h2>
    </div>
  );
}
