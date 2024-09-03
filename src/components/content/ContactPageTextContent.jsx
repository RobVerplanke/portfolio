import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import '../../styles/ContactTextContent.css';

export default function ContactPageTextContent() {
  return (
    <>
      <h2>Contact information</h2>
      <div className="contact-icons-holder">
        <div className="contact-email">
          <a href="http://">
            <AlternateEmailIcon />
          </a>
          <span className="contact-info-text">rverplanke@gmail.com</span>
        </div>
        <div className="contact-linkedin">
          <a target="_blank" href="http://www.linkedin.com/in/rob-verplanke-jr">
            <LinkedInIcon />
          </a>
          <span className="contact-info-text">
            linkedin.com/in/rob-verplanke-jr
          </span>
        </div>
        <div className="contact-github">
          <a target="_blank" href="http://www.github.com/RobVerplanke">
            <GitHubIcon />
          </a>
          <span className="contact-info-text">github.com/RobVerplanke</span>
        </div>
      </div>
    </>
  );
}
