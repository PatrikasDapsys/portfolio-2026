import './LandingTopSection.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'

export function LandingTopSection() {
  return (
    <div className="landing__top-section">
      <div className="landing__top-section--left">
        <h1 className="landing__title">Patrikas Dapšys</h1>
        <p className="landing__description">
          I'm a <span className="highlight">Frontend software engineer</span> with
          a strong <span className="highlight">passion</span> for building web
          applications with
          <span className="highlight"> great user experiences</span>.
        </p>
      </div>
      <div className="landing__top-section--right">
        <ul className="landing__social-links">
          <li className="landing__social-link">
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
          <li className="landing__social-link">
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li className="landing__social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li className="landing__social-link">
            <FontAwesomeIcon icon={faFileLines} />
          </li>
        </ul>
      </div>
    </div>
  )
}
