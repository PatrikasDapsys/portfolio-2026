import { useState } from 'react'
import { ContactField } from './components/ContactField/ContactField'
import './ContactForm.scss'

export function ContactForm() {
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')

  return (
    <form className="contact__form" action="#" method="post" noValidate>
      <div className="contact__field-container contact__field-container--email">
        <ContactField
          id="contact-email"
          name="email"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          inputProps={{ type: 'email', autoComplete: 'email' }}
        />
      </div>
      <div className="contact__field-container contact__field-container--title">
        <ContactField
          id="contact-title"
          name="title"
          label="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          inputProps={{ type: 'text' }}
        />
      </div>
      <div className="contact__field-container contact__field-container--message">
        <ContactField
          as="textarea"
          id="contact-message"
          name="message"
          label="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          fieldClassName="contact__field--message"
          textareaProps={{ rows: 4 }}
        />
      </div>
      <button className="contact__submit" type="button">
        Submit
      </button>
    </form>
  )
}
