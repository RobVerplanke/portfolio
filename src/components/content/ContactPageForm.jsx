/* eslint-disable react/no-unknown-property */
import { useNavigate } from 'react-router-dom';

import '../../styles/ContactForm.css';

export default function ContactForm() {
  const navigate = useNavigate();

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formEntries,
      }),
    })
      .then(() => navigate('/thank-you'))
      .catch((error) => alert(error));
  };

  return (
    <section>
      <div className="form-holder">
        <h3>Direct message</h3>

        <form
          name="contact"
          method="POST"
          action="/thank-you"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="subject">Subject:</label>
          <br />
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject..."
          />
          <br />

          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
          ></textarea>
          <br />
          <br />

          <button type="submit" aria-label="Send message">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
