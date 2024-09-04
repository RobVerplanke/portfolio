/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';
import '../../styles/ContactForm.css';

export default function ContactForm() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/thank-you');
  };
  return (
    <>
      <div className="form-holder">
        <h3>Direct message</h3>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="contact-form" value="contact" />

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
