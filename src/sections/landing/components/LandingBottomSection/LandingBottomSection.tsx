import './LandingBottomSection.scss'

export function LandingBottomSection() {
  return (
    <div className="landing__bottom-section">
      <div className="landing__bottom-section--left">
        <ul className="landing__bottom-section-list">
          <li className="landing__bottom-section-list-item">
            <a href="#" className="landing__bottom-section-link">
              Link 1
            </a>
          </li>
          <li className="landing__bottom-section-list-item">
            <a href="#" className="landing__bottom-section-link">
              Link 2
            </a>
          </li>
          <li className="landing__bottom-section-list-item">
            <a href="#" className="landing__bottom-section-link">
              Link 3
            </a>
          </li>
        </ul>
      </div>
      <h2 className="landing__bottom-section--right">
        Frontend <br />
        software engineer
      </h2>
    </div>
  )
}
