import { ToastProvider } from '../../components/Toast/ToastProvider';
import './ContactSection.scss';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  return (
    <ToastProvider>
      <section id="contact" className="contact">
        <h2 className="section-title">Contact</h2>
        <div className="contact__container">
          <p className="contact__description">
            I am actively seeking job opportunities and welcome any inquiries related to potential
            employment, reviews, invitations to collaborate on projects, or if you have any questions.
            <br />
            <br />
            Your feedback and testimonials are valuable to me, and I am open to exploring new projects
            and partnerships.
            <br />
            <br />
            Please feel free to reach out using the provided contact form. I look forward to
            connecting with you.
          </p>
          <hr className="contact__divider" />
          <ContactForm />
        </div>
      </section>
    </ToastProvider>
  );
}
