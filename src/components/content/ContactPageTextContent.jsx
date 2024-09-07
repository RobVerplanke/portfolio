import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../../styles/ContactTextContent.css';

export default function ContactPageTextContent() {
  return (
    <section>
      <h2>Contact information</h2>
      <br />
      <div className="contact-icons-holder">
        <div className="contact-icon-link">
          <a
            className="icon-nav-item"
            aria-label="Link to e-mail adres"
            href="http://"
          >
            <AlternateEmailIcon />
          </a>
          <span className="contact-info-text">rverplanke@gmail.com</span>
        </div>
        <div className="contact-icon-link">
          <a
            className="icon-nav-item"
            aria-label="Link to LinkedIn"
            target="_blank"
            href="http://www.linkedin.com/in/rob-verplanke-jr"
          >
            <LinkedInIcon />
          </a>
          <span className="contact-info-text">
            linkedin.com/in/rob-verplanke-jr
          </span>
        </div>
        <div className="contact-icon-link">
          <a
            className="icon-nav-item"
            aria-label="Link to Github"
            target="_blank"
            href="http://www.github.com/RobVerplanke"
          >
            <GitHubIcon />
          </a>
          <span className="contact-info-text">github.com/RobVerplanke</span>
        </div>
      </div>
    </section>
  );
}
