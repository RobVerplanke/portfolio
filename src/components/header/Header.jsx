import HeaderLogo from '../header/HeaderLogo.jsx';
import NavBar from './NavBar.jsx';

import '../../styles/header/Header.css';

function Header() {
  return (
    <header>
      <div className="header__logo">
        <HeaderLogo />
      </div>
      <div className="header__nav">
        <NavBar />
      </div>
      <div className="header__empty-bar"></div>
    </header>
  );
}

export default Header;
