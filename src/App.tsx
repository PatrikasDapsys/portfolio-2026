import { ExperienceSection } from './sections/experience/ExperienceSection'
import { LandingSection } from './sections/landing/LandingSection'
import { ContactSection } from './sections/contact/ContactSection'
import { FooterSection } from './sections/footer/FooterSection'

function App() {
  return (
    <main id="top" className="app-shell">
      <LandingSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

export default App
