import { NavLink } from 'react-router-dom';

import React from 'react';
import styles from './Header.module.scss';
import mainLogo from '../../images/main_logo/Logo.svg';
import { Actions } from './components/Actions/Actions';
import { Navigation } from './components/Navigation';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img className={styles.header__logo} src={mainLogo} alt="logo" />
      </NavLink>
      <nav className={styles.nav_bar}>
        <Navigation />
        <Actions />
      </nav>
    </header>
  );
};
