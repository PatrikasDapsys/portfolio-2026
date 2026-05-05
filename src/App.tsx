import { ExperienceSection } from './sections/experience/ExperienceSection'
import { LandingSection } from './sections/landing/LandingSection'
import { ContactSection } from './sections/contact/ContactSection'

function App() {
  return (
    <main className="app-shell">
      <LandingSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}

export default App
