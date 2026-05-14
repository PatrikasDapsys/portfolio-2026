import { Suspense } from 'react';
import { LandingSection } from './sections/landing/LandingSection';
import { SummarySection } from './sections/summary/SummarySection';
import { lazyNamed } from './utils/lazyNamed';

const ExperienceSection = lazyNamed(
  () => import('./sections/experience/ExperienceSection'),
  'ExperienceSection',
);
const ContactSection = lazyNamed(
  () => import('./sections/contact/ContactSection'),
  'ContactSection',
);
const FooterSection = lazyNamed(
  () => import('./sections/footer/FooterSection'),
  'FooterSection',
);

function App() {
  return (
    <main id="top" className="app-shell">
      <div className="starfield-background" aria-hidden="true">
        <div className="starfield-layer-small" />
        <div className="starfield-layer-medium" />
      </div>
      <div className="app-shell__content">
        <LandingSection />
        <SummarySection />
        <Suspense fallback={null}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={null}>
          <FooterSection />
        </Suspense>
      </div>
    </main>
  );
}

export default App;
