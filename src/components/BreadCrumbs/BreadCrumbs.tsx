import backToHome from '../../images/Icons/home.svg';
import backToHomeDark from '../../images/Icons/homeDark.svg';
import backToPage from '../../images/Icons/arrow_right.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';

import styles from './BreadCrumbs.module.scss';
import cn from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface Props {
  title?: string;
  theThirdPart?: string;
}

export const BreadCrumbs: React.FC<Props> = ({
  title = 'Phones',
  theThirdPart = '',
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  let breadCrumbsTitle = 'Phones';

  if (title !== 'Mobile phones') {
    breadCrumbsTitle = title;
  }

  let breadCrumbsLink = 'phones';

  if (title !== 'Mobile phones') {
    breadCrumbsLink = title.toLowerCase();
  }

  const { pathname } = useLocation();

  const urlParts = pathname.split('/');

  let showThirdPart = false;

  if (urlParts.length > 2) {
    showThirdPart = true;
  }

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/" className={styles.breadcrumbs__link}>
        <img src={theme === 'light' ? backToHome : backToHomeDark} alt="back to home page" />
      </Link>

      <div className={styles.breadcrumbs__arrow}>
      <div className={styles.breadcrumbs__arrow}>
        <img src={backToPage} alt="back to page" />
      </div>

      <NavLink
        className={cn(styles.breadcrumbs__link, {
          [styles['breadcrumbs__link--active']]: !showThirdPart,
        })}
        to={`/${breadCrumbsLink}`}
      >
        {breadCrumbsTitle}
      </NavLink>

      {showThirdPart && (
        <>
          <div className={styles.breadcrumbs__arrow}>
            <img src={backToPage} alt="back to page" />
          </div>

          <NavLink
            className={({ isActive }) =>
              cn(styles.breadcrumbs__link, {
                [styles['breadcrumbs__link--active']]: isActive,
              })
            }
            to=""
          >
            {theThirdPart}
          </NavLink>
        </>
      )}
      </div>

      <NavLink
        className={cn(styles.breadcrumbs__link, {
          [styles['breadcrumbs__link--active']]: !showThirdPart,
        })}
        to={`/${breadCrumbsLink}`}
      >
        {breadCrumbsTitle}
      </NavLink>

      {showThirdPart && (
        <>
          <div className={styles.breadcrumbs__arrow}>
            <img src={backToPage} alt="back to page" />
          </div>

          <NavLink
            className={({ isActive }) =>
              cn(styles.breadcrumbs__link, {
                [styles['breadcrumbs__link--active']]: isActive,
              })
            }
            to=""
          >
            {theThirdPart}
          </NavLink>
        </>
      )}
    </div>
  );
};
