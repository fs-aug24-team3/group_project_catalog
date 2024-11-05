import { FC } from 'react';

import Main_logo from '../../images/main_logo/Logo.svg';
import Button_icon from '../../images/Icons/stroke.svg';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footer__icon}>
          <a href="#">
            <img
              src={Main_logo}
              alt="Main-logo"
              className={styles['footer__icon-main']}
            />
          </a>
        </div>
        <div className={styles.footer__information}>
          <span>
            <a
              href="https://github.com/fs-aug24-team3/group_project_catalog/"
              className={styles.footer__link}
            >
              Github
            </a>
          </span>

          <span>
            <a href="#" className={styles.footer__link}>
              Contacts
            </a>
          </span>

          <span>
            <a href="#" className={styles.footer__link}>
              Rights
            </a>
          </span>
        </div>
        <div className={styles['footer__back-to-top']}>
          Back to top
          <a className={styles['footer__top-icon']} href="#">
            <img src={Button_icon} alt="Button_icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
