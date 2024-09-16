import { useData } from '../../context/DataContext.jsx';
import { Link } from 'react-router-dom';
import '../../styles/header/NavBar.css';

function NavBar() {
  const { activePage, setActivePage } = useData();

  // Set the page that's currently active
  function handleClick(page) {
    setActivePage((prevVal) => ({ ...prevVal, title: page.title }));
  }

  return (
    <nav>
      {/* Home Page */}
      <Link
        className={`${
          activePage.title === 'home'
            ? 'button-nav-item button-nav-item-selected'
            : 'button-nav-item'
        }`}
        aria-label="Go to Homepage"
        to="/home"
        onClick={() => handleClick({ title: 'home' })}
      >
        Home
      </Link>

      {/* About Page */}
      <Link
        className={`${
          activePage.title === 'about'
            ? 'button-nav-item button-nav-item-selected'
            : 'button-nav-item'
        }`}
        aria-label="Go to About-me page"
        to="/about"
        onClick={() => handleClick({ title: 'about' })}
      >
        About
      </Link>

      {/* Projects Page */}
      <Link
        className={`${
          activePage.title === 'projects'
            ? 'button-nav-item button-nav-item-selected'
            : 'button-nav-item'
        }`}
        aria-label="Go to Projectspage"
        to="/projects"
        onClick={() => handleClick({ title: 'projects' })}
      >
        Projects
      </Link>

      {/* Contact Page */}
      <Link
        className={`${
          activePage.title === 'contact'
            ? 'button-nav-item--highlighted button-nav-item--highlighted-selected'
            : 'button-nav-item--highlighted'
        }`}
        aria-label="Go to Contactpage"
        to="/contact"
        onClick={() => handleClick({ title: 'contact' })}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
