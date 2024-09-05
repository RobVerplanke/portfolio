import { Link } from 'react-router-dom';
import '../../styles/NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className={'nav-container'}>
        <div>
          <Link to="/home">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
