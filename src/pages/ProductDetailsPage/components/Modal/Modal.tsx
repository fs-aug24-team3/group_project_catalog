/* eslint-disable max-len */
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import close from '../../../../images/Icons/close.svg';

import { AddToCartButton } from '../../../../components/AddToCartButton';
import { AddToFavouritesButton } from '../../../../components/AddToFavouritesButton';

import { DetailedProduct } from '../../../../types/DetailedProduct';
import { CartProduct } from '../../../../types/CartProduct';
import { convertToProductType } from '../../../../utils/convertToProductType';

import { addItemToCart } from '../../../../redux/slices/cartSlice';
import { ModalSwiper } from '../ModalSwiper';

import styles from './Modal.module.scss';
import { TechBlock } from '../../../../components/TechBlock';
import { useWidth } from '../../../../hooks/useWidth';
import { RootState } from '../../../../redux/store';

interface Props {
  product: DetailedProduct;
  onCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: FC<Props> = ({ product, onCloseModal }) => {
  const [isPressed, setIsPressed] = useState(false);

  const { width, updateWidth } = useWidth();

  const dispatch = useDispatch();

  const backdropClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    event.currentTarget === event.target && onCloseModal(false);

  const escClose = (event: KeyboardEvent) =>
    event.code === 'Escape' && onCloseModal(false);

  const handleAddToCart = () => {
    if (!isPressed) {
      const cartProduct: CartProduct = {
        id: product.id,
        product: convertToProductType(product),
        quantity: 1,
      };

      dispatch(addItemToCart(cartProduct));
      setIsPressed(true);
    }
  };

  const items = useSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    document.addEventListener('keydown', escClose);

    return () => document.removeEventListener('keydown', escClose);
  });

  useEffect(() => {
    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const isItemInCart = items.some(itm => itm.id === product.id);

    setIsPressed(isItemInCart);
  }, [items, product.id]);

  return (
    <div className={styles.modal} onClick={backdropClose}>
      <div className={styles.modal__content}>
        <button
          type="button"
          className={styles.modal__close}
          onClick={() => onCloseModal(false)}
        >
          <img src={close} alt="" className={styles['modal__close-image']} />
        </button>

        <ModalSwiper images={product.images} />

        <div>
          <h2 className={styles.modal__title}>{product.name}</h2>

          <div className={styles['modal__price-block']}>
            <p className={styles['modal__price-block--new']}>
              ${product.priceDiscount}
            </p>
            <p className={styles['modal__price-block--old']}>
              ${product.priceRegular}
            </p>
          </div>

          <div className={styles.modal__buttons}>
            <AddToCartButton
              onAddToCart={handleAddToCart}
              isPressed={isPressed}
            />
            <AddToFavouritesButton item={convertToProductType(product)} />
          </div>

          {width > 1199 && (
            <div className={styles['modal__tech-block']}>
              <TechBlock product={product} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
