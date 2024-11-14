/* eslint-disable import/no-extraneous-dependencies */
import styles from './CartPage.module.scss';
import { useState } from 'react';
import { CartItem } from '../../components/CartItem/CartItem';
import { PageTitle } from '../../components/PageTitle';
import { BackLink } from '../../components/NavigateBack';
import { CheckoutModal } from '../../components/CheckoutModal';
import { EmptyCart } from '../../components/EmptyCart';

import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { DeliveryModal } from '../../components/DeliveryModal';
import { useTranslation } from 'react-i18next';
import { getItemEnds } from '../../utils/getItemEnds';

export const CartPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeliveryModalOpen, setIsDeliveryModalOpen] = useState(false);

  const { t } = useTranslation();

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
      <PageTitle>{t('pageTitle.cart')}</PageTitle>
      {!!cart.length ? (
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
              {t('actions_pages.total_for')} {totalQuantity}{' '}
              {t(getItemEnds(totalQuantity))}
            </p>
            <button
              onClick={() => {
                setIsDeliveryModalOpen(true);
              }}
              className={styles['cart-page__checkout-button']}
            >
              {t('actions_pages.checkout')}
            </button>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}

      {isDeliveryModalOpen && (
        <DeliveryModal
          hide={() => setIsDeliveryModalOpen(false)}
          openSecondModal={() => setIsModalOpen(true)}
        />
      )}

      {isModalOpen && (
        <CheckoutModal
          hide={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </section>
  );
};
