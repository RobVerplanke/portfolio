/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/ContactForm.css';

export default function ContactForm() {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // Set up sending direct message data to Netlify notification box
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  }

  // Send form data to root of app where it gets handled by Netlify
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

  // Every firts time component renders, set focus on first input field
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section>
      <div className="form-container">
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
            ref={inputRef}
            type="text"
            id="subject"
            name="subject"
            aria-label="subject"
            placeholder="Subject..."
          />
          <br />

          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            name="message"
            aria-label="message"
            placeholder="Your message..."
          ></textarea>
          <br />
          <br />

          <button
            className="button-nav-item--highlighted submit-button"
            type="submit"
            aria-label="Send message"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
