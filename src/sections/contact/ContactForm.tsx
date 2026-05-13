import { useState } from 'react';
import type { FormEvent } from 'react';
import { ContactField } from './components/ContactField/ContactField';
import { useToast } from '../../components/Toast/useToast';
import './ContactForm.scss';

type FieldErrors = {
  title?: string;
  message?: string;
};

const MIN_MESSAGE_LENGTH = 10;
const MAX_MAILTO_LENGTH = 2000;

function validate(title: string, message: string): FieldErrors {
  const errors: FieldErrors = {};

  if (!title.trim()) {
    errors.title = 'Title is required';
  }

  const trimmedMessage = message.trim();
  if (!trimmedMessage) {
    errors.message = 'Message is required';
  } else if (trimmedMessage.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters`;
  }

  return errors;
}

export function ContactForm() {
  const { showToast } = useToast();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const clearError = (field: keyof FieldErrors) => {
    setFieldErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validate(title, message);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const recipient = import.meta.env.VITE_CONTACT_EMAIL;
    if (!recipient) {
      showToast({
        variant: 'error',
        message: 'Contact form is not configured. Please try again later.',
      });
      return;
    }

    const trimmedTitle = title.trim();
    const trimmedMessage = message.trim();
    const body = trimmedMessage;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      trimmedTitle,
    )}&body=${encodeURIComponent(body)}`;

    if (mailtoUrl.length > MAX_MAILTO_LENGTH) {
      showToast({
        variant: 'error',
        message: 'Message is too long to open in your email app. Please shorten it.',
      });
      return;
    }

    window.location.href = mailtoUrl;
    showToast({
      variant: 'success',
      message: 'Your default email app should open with a draft ready to send.',
    });
  };

  return (
    <form className="contact__form" onSubmit={handleSubmit} noValidate>
      <div className="contact__field-container contact__field-container--title">
        <ContactField
          id="contact-title"
          name="title"
          label="Title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            clearError('title');
          }}
          error={fieldErrors.title}
          inputProps={{ type: 'text', maxLength: 70 }}
        />
      </div>
      <div className="contact__field-container contact__field-container--message">
        <ContactField
          as="textarea"
          id="contact-message"
          name="message"
          label="Message"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            clearError('message');
          }}
          error={fieldErrors.message}
          fieldClassName="contact__field--message"
          textareaProps={{ rows: 4, maxLength: 1000 }}
        />
      </div>
      <button className="contact__submit" type="submit">
        Open in email app
      </button>
    </form>
  );
}
