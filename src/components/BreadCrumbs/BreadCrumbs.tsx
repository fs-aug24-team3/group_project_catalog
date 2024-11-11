import backToHome from '../../images/Icons/home.svg';
import backToHomeDark from '../../images/Icons/homeDark.svg';
import backToPage from '../../images/Icons/arrow_right.svg';
import { Link } from 'react-router-dom';

import styles from './BreadCrumbs.module.scss';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

export const BreadCrumbs = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={styles.breadcrumbs}>
      <Link to="" className={styles.breadcrumbs__link}>
        <img
          src={theme === 'light' ? backToHome : backToHomeDark}
          alt="back to home page"
        />
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
