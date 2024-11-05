import { FC } from 'react';

import Main_logo from '../../images/main_logo/Logo.svg';
import Top_icon from '../../images/Icons/stroke.svg';

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import mainStyles from '../../styles/App.module.scss';

export const Footer: FC = () => {
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
            <Link
              to={'https://github.com/fs-aug24-team3/group_project_catalog/'}
              className={styles.footer__link}
            >
              Github
            </Link>
          </span>

          <span>
            <Link to={'contacts'} className={styles.footer__link}>
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
            <img src={Top_icon} alt="Top_icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
