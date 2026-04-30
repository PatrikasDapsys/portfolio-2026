import './LandingSection.scss'
import { LandingBottomSection } from './components/LandingBottomSection/LandingBottomSection'
import { LandingOuterSection } from './components/LandingOuterSection/LandingOuterSection'
import { LandingTopSection } from './components/LandingTopSection/LandingTopSection'

export function LandingSection() {
  return (
    <section className="landing">
      <div className="landing__container">
        <LandingTopSection />
        <LandingBottomSection />
      </div>
      <LandingOuterSection />
    </section>
  )
}

// TODO: fix ray overlay issue