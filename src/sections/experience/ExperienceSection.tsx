import { ExperienceEntry } from './components/ExperienceEntry/ExperienceEntry';
import './ExperienceSection.scss';

const bitdegreeBullets = [
  'Frontend Engineering: Developed and maintained modern frontend applications using Vue.js, React.js, TypeScript, JavaScript, HTML5, and SCSS, Bootstrap.',
  'Cross-Functional Collaboration: Partnered with international engineering, product, and design teams in Agile workflows to deliver high-performance interfaces.',
  'Full-Stack Synergy: Integrated frontend components with PHP/Laravel backend systems and RESTful APIs to ensure data integrity and smooth user journeys.',
  'AI-Driven Productivity: Expertly utilized AI-integrated development environments (IDEs) and AI-driven tools to accelerate coding workflows, refactor legacy code, and optimize frontend features.',
  'Performance & SEO: Engineered critical optimizations that increased page speed by 3x and secured a 100 Lighthouse SEO score, significantly boosting search visibility and user retention.',
  'DevOps & Quality: Actively participated in CI/CD pipelines, Git-based version control, and rigorous code reviews to maintain high code quality standards.',
];

const militaryServiceBullets = [
  'Developed advanced skills in teamwork, leadership, and crisis management while operating in high-pressure, structured environments.',
  'Applied rigorous discipline and time management to meet demanding objectives, traits directly translated to efficient professional engineering workflows.',
];

export function ExperienceSection() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience__container">
        <ExperienceEntry
          title="Web Developer"
          date="Nov 2023 – Dec 2025"
          bullets={bitdegreeBullets}
          employerName="BitDegree"
          employerWebsite="https://bitdegree.org"
        />
        <ExperienceEntry
          reversed
          title="Mandatory Military Service"
          date="Dec 2024 – Aug 2025"
          bullets={militaryServiceBullets}
        />
      </div>
    </section>
  );
}
