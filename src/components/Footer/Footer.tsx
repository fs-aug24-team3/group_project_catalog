import { FC } from 'react';

import Main_logo from '../../images/main_logo/Logo.svg';
import Button_icon from '../../images/Icons/stroke.svg';

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icon}>
        <a href="#" className={styles['footer__icon-main']}>
          <img src={Main_logo} alt="Main-logo" />
        </a>
      </div>

      <div className={styles.footer__information}>
        <span>
          <Link
            to={'https://github.com/fs-aug24-team3/group_project_catalog/'}
            className={styles.footer__link}
          >
            Github
          </Link>
        </span>

        <span>
          <Link to={'contants'} className={styles.footer__link}>
            {/* contants */}
            Contacts
          </Link>
        </span>

        <span>
          <Link to={'rights'} className={styles.footer__link}>
            Rights
          </Link>
        </span>
      </div>
      <div className={styles['footer__back-to-top']}>
        Back to top
        <a className={styles['footer__top-icon']} href="#">
          <img src={Button_icon} alt="Button_icon" />
        </a>
      </div>
    </footer>
  );
};

/// git add папку ./Footer - шлях // im
