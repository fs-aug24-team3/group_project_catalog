import { FC } from 'react';

import Main_logo from '../../images/main_logo/Logo.svg';
import Top_icon from '../../images/Icons/stroke.svg';

import styles from './Footer.module.scss';
import { Link, NavLink } from 'react-router-dom';
import mainStyles from '../../styles/App.module.scss';

export const Footer: FC = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer className={styles.footer}>
      <div className={mainStyles.container && styles.wrapper}>
        <div className={styles.footer__icon}>
          <Link to="/" className={styles['footer__icon-main']}>
            <img src={Main_logo} alt="Main-logo" />
          </Link>
        </div>

        <div className={styles.footer__information}>
          <span>
            <NavLink
              to={'https://github.com/fs-aug24-team3/group_project_catalog/'}
              className={styles.footer__link}
            >
              Github
            </NavLink>
          </span>

          <span>
            <NavLink to={'contacts'} className={styles.footer__link}>
              Contacts
            </NavLink>
          </span>

          <span>
            <NavLink to={'rights'} className={styles.footer__link}>
              Rights
            </NavLink>
          </span>
        </div>
        <div className={styles['footer__back-to-top']}>
          Back to top
          <button className={styles['footer__top-icon']} onClick={scrollToTop}>
            <img src={Top_icon} alt="Top_icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};
