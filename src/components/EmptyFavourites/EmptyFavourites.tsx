import styles from './EmptyFavourites.module.scss';
import emptyFavouritesPng from '../../../public/img/product-not-found.png';
import { Link } from 'react-router-dom';

export const EmptyFavourites = () => {
  return (
    <div className={styles.favourites}>
      <img
        src={emptyFavouritesPng}
        alt="image if cart is empty"
        className={styles.favourites__image}
      />
      <h2 className={styles.favourites__title}>
        We are sad to see that you didn&apos;t like anything
      </h2>
      <Link to="/" className={styles.favourites__button}>
        Check new gadgets
      </Link>
    </div>
  );
};
