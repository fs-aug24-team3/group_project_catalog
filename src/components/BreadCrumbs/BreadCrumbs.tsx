import backToHome from '../../images/Icons/home.svg';
import backToPage from '../../images/Icons/arrow_right.svg';
import { Link, NavLink } from 'react-router-dom';

import styles from './BreadCrumbs.module.scss';
import cn from 'classnames';
import React from 'react';

// const NavData = [
//   { title: 'Home', path: '/' },
//   { title: 'Phones', path: '/phones' },
//   { title: 'Tablets', path: '/tablets' },
//   { title: 'Accessories', path: '/accessories' },
// ];

interface Props {
  title?: string;
}

export const BreadCrumbs: React.FC<Props> = ({ title = 'Phones' }) => {
  let breadCrumbsTitle = 'Phones';

  if (title !== 'Mobile phones') {
    breadCrumbsTitle = title;
  }

  let breadCrumbsLink = 'phones';

  if (title !== 'Mobile phones') {
    breadCrumbsLink = title.toLowerCase();
  }

  return (
    <div className={styles.breadcrumbs}>
      <Link to="/" className={styles.breadcrumbs__link}>
        <img src={backToHome} alt="back to home page" />
      </Link>

      <div className={styles.breadcrumbs__arrow}>
        <img src={backToPage} alt="back to page" />
      </div>

      <NavLink
        className={({ isActive }) =>
          cn(styles.breadcrumbs__link, {
            [styles['breadcrumbs__link--active']]: isActive,
          })
        }
        to={`/${breadCrumbsLink}`}
      >
        {breadCrumbsTitle}
      </NavLink>

      {false && (
        <div className={styles.breadcrumbs__arrow}>
          <img src={backToPage} alt="back to page" />
        </div>
      )}
    </div>
  );
};
