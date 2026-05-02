import './ExperienceEntry.scss'

export function ExperienceEntry() {
  return (
    <article className="experience-entry">
      <header className="experience-entry__header">
        <h3 className="experience-entry__title">Role title</h3>
        <p className="experience-entry__meta">Company · Dates</p>
      </header>
      <ul className="experience-entry__highlights">
        <li>First highlight</li>
      </ul>
    </article>
  )
}
