import { ExperienceEntry } from './components/ExperienceEntry/ExperienceEntry'
import './ExperienceSection.scss'

export function ExperienceSection() {
  return (
    <section className="experience">
      <h2 className="section-title">
        Experience
      </h2>
      <div className="experience__container">
        <ExperienceEntry />
        <ExperienceEntry reversed />
      </div>
    </section>
  )
}
