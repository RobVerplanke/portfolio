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
        aria-label="Go to Homepage"
        className={`${
          activePage.title === 'home'
            ? 'button-nav-item button-nav-item-selected'
            : 'button-nav-item'
        }`}
        to="/home"
        onClick={() => handleClick({ title: 'home' })}
      >
        Home
      </Link>

      {/* About Page */}
      <Link
        aria-label="Go to About-me page"
        className={`${
          activePage.title === 'about'
            ? 'button-nav-item button-nav-item-selected'
            : 'button-nav-item'
        }`}
        to="/about"
        onClick={() => handleClick({ title: 'about' })}
      >
        About
      </Link>

      {/* Projects Page */}
      <Link
        aria-label="Go to Projectspage"
        className={`${
          activePage.title === 'projects'
            ? 'button-nav-item button-nav-item-selected'
            : 'button-nav-item'
        }`}
        to="/projects"
        onClick={() => handleClick({ title: 'projects' })}
      >
        Projects
      </Link>

      {/* Contact Page */}
      <Link
        aria-label="Go to Contactpage"
        className={`${
          activePage.title === 'contact'
            ? 'button-nav-item-highlighted button-nav-item-highlighted-selected'
            : 'button-nav-item-highlighted'
        }`}
        to="/contact"
        onClick={() => handleClick({ title: 'contact' })}
      >
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
