import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link className="button-highlight" to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default NavBar;
