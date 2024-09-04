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
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...name,
      }),
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate('/thank-you/'))
      // On error, show the error in an alert
      .catch((error) => alert(error));
  };

  return (
    <>
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
