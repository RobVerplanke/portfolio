/* eslint-disable react/no-unknown-property */
import '../../styles/ContactForm.css';

export default function ContactForm() {
  return (
    <>
      <div className="form-holder">
        <h3>Direct message</h3>

        <form
          name="contact"
          action="/thank-you"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="subject">Subject:</label>
          <br />
          <input type="text" id="subject" name="subject" />
          <br />

          <label htmlFor="content">Message:</label>
          <br />
          <textarea id="content" name="message"></textarea>
          <br />
          <br />

          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
