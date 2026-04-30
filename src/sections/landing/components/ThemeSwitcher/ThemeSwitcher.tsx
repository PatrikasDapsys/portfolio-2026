import './ThemeSwitcher.scss'

export function ThemeSwitcher() {
  return (
    <div className="theme-switcher" aria-hidden="true">
      <div className="theme-switcher__option">
        <div className="theme-switcher__state"></div>
        <span className="theme-switcher__label">LIGHT</span>
      </div>
      <div className="theme-switcher__option theme-switcher__option--active">
        <div className="theme-switcher__state"></div>
        <span className="theme-switcher__label">DARK</span>
      </div>
    </div>
  )
}
