import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';
import styles from './Header.module.scss';
import mainLogo from '../../images/main_logo/Logo.svg';
import burgerMenu from '../../images/Icons/burger-menu.svg';
import closeMenu from '../../images/Icons/close.svg';
import { Actions } from './components/Actions/Actions';
import { Navigation } from './components/Navigation';
import { Menu } from './components/Menu';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHideMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={styles.header__logolink}
        onClick={handleHideMenu}
      >
        <img className={styles.header__logo} src={mainLogo} alt="logo" />
      </NavLink>
      <nav className={styles.nav_bar}>
        <Navigation />
        <Actions />
      </nav>
      <button
        className={styles.header__button}
        onClick={() => setIsMenuOpen(isOpen => !isOpen)}
      >
        {!isMenuOpen && <img src={burgerMenu} alt="open menu" />}
        {isMenuOpen && <img src={closeMenu} alt="close menu" />}
      </button>
      <Menu isOpen={isMenuOpen} onHideMenu={handleHideMenu} />
    </header>
  );
};
