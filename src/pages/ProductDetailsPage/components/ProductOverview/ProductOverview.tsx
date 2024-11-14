import { FC, useEffect, useState } from 'react';
import { DetailedProduct } from '../../../../types/DetailedProduct';
import { RadioInputs } from '../RadioInputs';
import styles from './ProductOverview.module.scss';
import cn from 'classnames';
import { AddToCartButton } from '../../../../components/AddToCartButton';
// eslint-disable-next-line max-len
import { AddToFavouritesButton } from '../../../../components/AddToFavouritesButton';
import { CartProduct } from '../../../../types/CartProduct';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../../../redux/slices/cartSlice';

import { convertToProductType } from '../../../../utils/convertToProductType';

import { Modal } from '../Modal';
import { TechBlock } from '../../../../components/TechBlock';
import { RootState } from '../../../../redux/store';

interface Props {
  product: DetailedProduct;
  selectedColor: string;
  onSelectColor: React.Dispatch<React.SetStateAction<string>>;
  selectedCapacity: string;
  onSelectCapacity: React.Dispatch<React.SetStateAction<string>>;
}

export const ProductOverview: FC<Props> = ({
  product,
  selectedColor,
  onSelectColor,
  selectedCapacity,
  onSelectCapacity,
}) => {
  const [mainPhoto, setMainPhoto] = useState(product.images[0]);
  const [isPressed, setIsPressed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

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
    if (product) {
      setMainPhoto(product.images[0]);
    }
  }, [product]);

  useEffect(() => {
    const isItemInCart = items.some(itm => itm.id === product.id);

    setIsPressed(isItemInCart);
  }, [items, product.id]);

  return (
    <div className={styles.overview}>
      <div className={styles['overview__photos-block']}>
        <div className={styles['overview__main-photo-box']}>
          <button
            type="button"
            className={styles.overview__button}
            onClick={() => setIsModalOpen(true)}
          >
            <img
              src={mainPhoto}
              alt="main photo"
              className={styles['overview__main-photo']}
            />
          </button>
        </div>

        <div className={styles['overview__small-photo-box']}>
          {product.images.slice(0, 4).map(image => (
            <div
              key={image}
              className={cn(styles['overview__small-photo-wrap'], {
                [styles['overview__small-photo-wrap--active']]:
                  image === mainPhoto,
              })}
            >
              <button
                type="button"
                className={styles.overview__button}
                onClick={() => setMainPhoto(image)}
              >
                <img
                  src={image}
                  alt="small photos"
                  className={styles['overview__small-photo']}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['overview__info-block']}>
        <RadioInputs
          product={product}
          selectedColor={selectedColor}
          onSelectColor={onSelectColor}
          selectedCapacity={selectedCapacity}
          onSelectCapacity={onSelectCapacity}
        />

        <div className={styles['overview__price-block']}>
          <p className={styles['overview__price-block--new']}>
            ${product.priceDiscount}
          </p>
          <p className={styles['overview__price-block--old']}>
            ${product.priceRegular}
          </p>
        </div>

        <div className={styles.overview__buttons}>
          <AddToCartButton
            onAddToCart={handleAddToCart}
            isPressed={isPressed}
          />
          <AddToFavouritesButton item={convertToProductType(product)} />
        </div>

        <TechBlock product={product} />
      </div>

      {isModalOpen && <Modal product={product} onCloseModal={setIsModalOpen} />}
    </div>
  );
};
