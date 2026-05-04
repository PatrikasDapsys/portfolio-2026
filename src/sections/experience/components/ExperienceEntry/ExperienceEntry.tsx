import './ExperienceEntry.scss'

type ExperienceEntryProps = {
  reversed?: boolean
}

export function ExperienceEntry({ reversed = false }: ExperienceEntryProps) {
  const className = `experience-entry${reversed ? ' experience-entry--reversed' : ''}`

  return (
    <article className={className}>
      <div className="experience-entry__top">Web Developer</div>
      <div className="experience-entry__middle">
        <span className="experience-entry__circle" aria-hidden="true" />
        <div className="experience-entry__separator-container">
          <div className="experience-entry__date">
            2024 - 2026
          </div>
          <span className="experience-entry__separator" />
        </div>
      </div>
      <div className="experience-entry__bottom">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </div>
    </article>
  )
}
