import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { CONTACT_EMAIL_ADRES } from '../../lib/constants.js';

import '../../styles/ContactTextContent.css';

export default function ContactPageTextContent() {
  return (
    <section>
      <h2>Contact information</h2>
      <br />
      <div className="contact-icons-holder">
        {/* Email icon and textual adress */}
        <div className="contact-icon-link">
          <a
            aria-label="Link to e-mail adres"
            href={'mailto:' + CONTACT_EMAIL_ADRES}
          >
            <AlternateEmailIcon className="icon-nav-item" />
          </a>
          <span className="contact-info-text">rverplanke@gmail.com</span>
        </div>

        {/* Contact icon and textual adress */}
        <div className="contact-icon-link">
          <a
            aria-label="Link to LinkedIn page"
            target="_blank"
            href="http://www.linkedin.com/in/rob-verplanke-jr"
          >
            <LinkedInIcon className="icon-nav-item" />
          </a>
          <span className="contact-info-text">
            linkedin.com/in/rob-verplanke-jr
          </span>
        </div>

        {/* Github icon and textual adress */}
        <div className="contact-icon-link">
          <a
            aria-label="Link to Github"
            target="_blank"
            href="http://www.github.com/RobVerplanke"
          >
            <GitHubIcon className="icon-nav-item" />
          </a>
          <span className="contact-info-text">github.com/RobVerplanke</span>
        </div>
      </div>
    </section>
  );
}
