import { Link } from 'react-router-dom';
// Class .button-nav-item is styled in index.css

function NavBar() {
  return (
    <nav>
      <Link className="button-nav-item" to="/home">
        Home
      </Link>
      <Link className="button-nav-item" to="/about">
        About
      </Link>
      <Link className="button-nav-item" to="/projects">
        Projects
      </Link>
      <Link className="button-nav-item-highlighted" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
