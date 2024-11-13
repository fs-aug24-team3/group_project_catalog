import styles from './EmptyCart.module.scss';
import emptyCart from '../../../public/img/cart-is-empty.png';
import emptyCartDark from '../../../public/img/cart-is-empty-dark.png';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

export const EmptyCart = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <article className={styles['empty-cart']}>
      <img
        src={theme === 'light' ? emptyCart : emptyCartDark}
        alt="image if cart is empty"
        className={styles['empty-cart__image']}
      />
      <h2 className={styles['empty-cart__title']}>
        Oh, so empty, maybe you should put something here
      </h2>
      <Link to={'/'} className={styles['empty-cart__button']}>
        Check new gadgets
      </Link>
    </article>
  );
};
