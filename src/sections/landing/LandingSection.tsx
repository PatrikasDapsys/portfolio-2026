import './LandingSection.scss'
import { LandingBottomSection } from './components/LandingBottomSection/LandingBottomSection'
import { LandingTopSection } from './components/LandingTopSection/LandingTopSection'

export function LandingSection() {
  return (
    <section className="landing__container">
      <LandingTopSection />
      <LandingBottomSection />
    </section>
  )
}

// TODO: add a dashing blue ray to landing section