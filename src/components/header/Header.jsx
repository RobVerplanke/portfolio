import HeaderLogo from '../header/HeaderLogo.jsx';
import NavBar from './NavBar.jsx';

import '../../styles/header/Header.css';

function Header() {
  return (
    <header>
      <div className="header-logo">
        <HeaderLogo />
      </div>
      <div className="header-nav">
        <NavBar />
      </div>
      <div className="header-empty-bar"></div>
    </header>
  );
}

export default Header;
