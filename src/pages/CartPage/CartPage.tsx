import styles from './CartPage.module.scss';
import { CartItem } from '../../components/CartItem/CartItem';
import { PageTitle } from '../../components/PageTitle';
import { BackLink } from '../../components/NavigateBack';

import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

export const CartPage: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cartItems);

  const totalQuantity = cart.reduce((count, p) => count + p.quantity, 0);

  const price = cart.reduce(
    (total, cartProduct) =>
      total + cartProduct.product.price * cartProduct.quantity,
    0,
  );

  return (
    <section className={`${styles['cart-page']}, ${styles.container}`}>
      <BackLink className={styles['cart-page__back-link']} />
      <PageTitle>Cart</PageTitle>
      {!!cart.length && (
        <div className={styles['cart-page__container']}>
          <ul className={styles['cart-page__list']}>
            {cart.map(item => (
              <li key={item.id}>
                <CartItem cartProduct={item}></CartItem>
              </li>
            ))}
          </ul>
          <div className={styles['cart-page__checkout-container']}>
            <p className={styles['cart-page__total']}>${price}</p>
            <p className={styles['cart-page__items-counter']}>
              Total for {totalQuantity} item{cart.length > 1 && 's'}
            </p>
            <button className={styles['cart-page__checkout-button']}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
