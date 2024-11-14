import React, { useState } from 'react';
import styles from './Header.module.scss';
import burgerMenu from '../../images/Icons/burger-menu.svg';
import closeMenu from '../../images/Icons/close.svg';
import burgerMenuDark from '../../images/Icons/burger-menu-dark.svg';
import closeMenuDark from '../../images/Icons/close-dark.svg';
import mainLogo from '../../images/main_logo/Logo.svg';
import mainLogoDark from '../../images/main_logo/LogoDark.svg';
import { Actions } from './components/Actions/Actions';
import { Navigation } from './components/Navigation';
import { Menu } from './components/Menu';
import { ThemeSwitch } from '../ThemeSwitch';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { TranslationButtons } from '../TranslationButtons';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleHideMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.header__logolink} onClick={handleHideMenu}>
        <img
          className={styles.header__logo}
          src={theme === 'light' ? mainLogo : mainLogoDark}
          alt="logo"
        />
      </Link>
      <nav className={styles['nav-bar']}>
        <Navigation />
        <div className={styles['nav-bar__actions-container']}>
          <TranslationButtons />

          <div className={styles['nav-bar__switch-container']}>
            <ThemeSwitch />
          </div>
          <Actions />
        </div>
      </nav>
      <button
        className={styles.header__button}
        onClick={() => setIsMenuOpen(isOpen => !isOpen)}
      >
        {!isMenuOpen && (
          <img
            src={theme === 'light' ? burgerMenu : burgerMenuDark}
            alt="open menu"
          />
        )}
        {isMenuOpen && (
          <img
            src={theme === 'light' ? closeMenu : closeMenuDark}
            alt="close menu"
          />
        )}
      </button>
      <Menu isOpen={isMenuOpen} onHideMenu={handleHideMenu} />
    </header>
  );
};
