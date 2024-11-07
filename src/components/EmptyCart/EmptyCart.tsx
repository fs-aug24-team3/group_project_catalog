import styles from './EmptyCart.module.scss'
import emptyCart from '../../../public/img/cart-is-empty.png';
import { Link } from 'react-router-dom';

export const EmptyCart = () => (
  <article className={styles['empty-cart']}>
    <img
      src={emptyCart}
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
