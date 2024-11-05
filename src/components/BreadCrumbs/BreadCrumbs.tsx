import backToHome from '../../images/Icons/home.svg';
import backToPage from '../../images/Icons/arrow_right.svg';
import { Link } from 'react-router-dom';

import styles from './BreadCrumbs.module.scss';

export const BreadCrumbs = () => {
  return (
    <div className={styles.breadcrumbs}>
      <Link to="" className={styles.breadcrumbs__link}>
        <img src={backToHome} alt="back to home page" />
      </Link>

      <Link to="" className={styles.breadcrumbs__link}>
        <img src={backToPage} alt="back to page" />
      </Link>

      <Link to="" className={styles.breadcrumbs__link}>
        Phones
      </Link>
    </div>
  );
};
