/* eslint-disable import/no-extraneous-dependencies */
import styles from './EmptyFavourites.module.scss';
import emptyFavouritesPng from '../../../public/img/product-not-found.png';
import emptyFvrtsPngDark from '../../../public/img/product-not-found-dark.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';

export const EmptyFavourites = () => {
  const { t } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={styles.favourites}>
      <img
        src={theme === 'light' ? emptyFavouritesPng : emptyFvrtsPngDark}
        alt="image if cart is empty"
        className={styles.favourites__image}
      />
      <h2 className={styles.favourites__title}>
        {t('actions_pages.empty_favourites')}
      </h2>
      <Link to="/" className={styles.favourites__button}>
        {t('actions_pages.empty_button')}
      </Link>
    </div>
  );
};
