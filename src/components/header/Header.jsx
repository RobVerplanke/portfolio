import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import '../../styles/Header.css';

function Header() {
  return (
    <header>
      <div className={'header-logo'}>
        <h1>Rob Verplanke jr.</h1>
      </div>
      <div className={'header-center-nav'}>
        <NavBar />
      </div>
      <div className={'header-right-nav'}>
        <div className={'nav-container'}>
          <div className="nav-button">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
