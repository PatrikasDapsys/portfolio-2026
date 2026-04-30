import './LandingOuterSection.scss'
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'

export function LandingOuterSection() {
  return (
    <>
      <div className="landing__tag landing__tag--first">Patrikas Dapšys</div>
      <div className="landing__tag landing__tag--second">Patrikas Dapšys</div>
      <ThemeSwitcher />
    </>
  )
}
