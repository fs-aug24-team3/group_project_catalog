/* eslint-disable import/no-extraneous-dependencies */
import styles from './CheckoutModal.module.scss';
import canceIcon from '../../images/Icons/close.svg';
import { useDispatch } from 'react-redux';
import { clearAllItemsFromCart } from '../../redux/slices/cartSlice';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  hide: () => void;
}

export const CheckoutModal: React.FC<Props> = ({ hide }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearAllItemsFromCart());
    hide();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <div className={styles.blur}></div>
      <dialog className={styles.modal}>
        <button className={styles.modal__close} onClick={() => hide()}>
          <img src={canceIcon} alt="cancel icon" />
        </button>
        <p className={styles.modal__title}>
          {t('delivery.payment_not_implemented')}
        </p>
        <button className={styles.modal__button} onClick={handleClearCart}>
          {t('delivery.yes')}
        </button>
      </dialog>
    </>
  );
};
