import { ExperienceSection } from './sections/experience/ExperienceSection'
import { LandingSection } from './sections/landing/LandingSection'
import { ContactSection } from './sections/contact/ContactSection'
import { FooterSection } from './sections/footer/FooterSection'

function App() {
  return (
    <main id="top" className="app-shell">
      <div className="starfield-background" aria-hidden="true">
        <div className="starfield-layer-small" />
        <div className="starfield-layer-medium" />
        <div className="starfield-layer-large" />
      </div>
      <div className="app-shell__content">
        <LandingSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  )
}

export default App
