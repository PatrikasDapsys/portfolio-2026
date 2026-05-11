import { ExperienceEntry } from './components/ExperienceEntry/ExperienceEntry';
import './ExperienceSection.scss';

const placeholderDescription =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ' +
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ' +
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ' +
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ' +
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. ' +
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.';

export function ExperienceSection() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience__container">
        <ExperienceEntry
          title="Web Developer"
          date="2024 - 2026"
          description={placeholderDescription}
        />
        <ExperienceEntry
          reversed
          title="Web Developer"
          date="2024 - 2026"
          description={placeholderDescription}
        />
      </div>
    </section>
  );
}
