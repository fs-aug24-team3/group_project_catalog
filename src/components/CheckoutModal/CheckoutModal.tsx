import styles from './CheckoutModal.module.scss';
import canceIcon from '../../images/Icons/close.svg';
import { useDispatch } from 'react-redux';
import { clearAllItemsFromCart } from '../../redux/slices/cartSlice';
import { useEffect } from 'react';

interface Props {
  hide: () => void;
}

export const CheckoutModal: React.FC<Props> = ({ hide }) => {
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
          Checkout is not implemented yet. Do you want to clear the Cart?
        </p>
        <button className={styles.modal__button} onClick={handleClearCart}>
          Yes
        </button>
      </dialog>
    </>
  );
};
