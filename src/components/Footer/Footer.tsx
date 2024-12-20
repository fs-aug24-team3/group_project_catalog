/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';

import Main_logo from '../../images/main_logo/Logo.svg';
import Main_logo_dark from '../../images/main_logo/LogoDark.svg';
import Top_icon from '../../images/Icons/stroke.svg';
import Top_icon_dark from '../../images/Icons/strokeDark.svg';

import styles from './Footer.module.scss';
import { Link, NavLink } from 'react-router-dom';
import mainStyles from '../../styles/App.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';

export const Footer: FC = () => {
  const { t } = useTranslation();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <footer className={styles.footer}>
      <div className={mainStyles.container && styles.wrapper}>
        <div className={styles.footer__icon}>
          <Link to="/" className={styles['footer__icon-main']}>
            <img
              src={theme === 'light' ? Main_logo : Main_logo_dark}
              alt="Main-logo"
            />
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
              {t('links.contacts')}
            </NavLink>
          </span>

          <span>
            <NavLink to={'rights'} className={styles.footer__link}>
              {t('links.rights')}
            </NavLink>
          </span>

          <span>
            <NavLink to={'service'} className={styles.footer__link}>
              {t('links.service')}
            </NavLink>
          </span>
        </div>
        <div className={styles['footer__back-to-top']}>
          {t('links.back_to_top')}
          <button className={styles['footer__top-icon']} onClick={scrollToTop}>
            <img
              src={theme === 'light' ? Top_icon : Top_icon_dark}
              alt="Top_icon"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
