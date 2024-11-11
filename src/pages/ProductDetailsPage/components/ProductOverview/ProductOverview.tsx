import { FC, useEffect, useState } from 'react';
import { DeatailedProduct } from '../../../../types/DetailedProduct';
import { RadioInputs } from '../RadioInputs';
import styles from './ProductOverview.module.scss';
import cn from 'classnames';
import { AddToCartButton } from '../../../../components/AddToCartButton';
// eslint-disable-next-line max-len
import { AddToFavouritesButton } from '../../../../components/AddToFavouritesButton';
import { CartProduct } from '../../../../types/CartProduct';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../../redux/slices/cartSlice';
import { Product } from '../../../../types/Product';

interface Props {
  product: DeatailedProduct;
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

  const dispatch = useDispatch();

  const convertToProductType = (): Product => {
    return {
      id: product.id,
      category: product.category,
      itemId: product.id,
      name: product.name,
      image: product.images[0],
      price: product.priceDiscount,
      fullPrice: product.priceRegular,
      screen: product.screen,
      capacity: product.capacity,
      color: product.color,
      ram: product.ram,
    };
  };

  const handleAddToCart = () => {
    if (!isPressed) {
      const cartProduct: CartProduct = {
        id: product.id,
        product: convertToProductType(),
        quantity: 1,
      };

      dispatch(addItemToCart(cartProduct));
      setIsPressed(true);
    }
  };

  useEffect(() => {
    if (product) {
      setMainPhoto(product.images[0]);
    }
  }, [product]);

  return (
    <div className={styles.overview}>
      <div className={styles['overview__photos-block']}>
        <div className={styles['overview__main-photo-box']}>
          <img
            src={mainPhoto}
            alt=""
            className={styles['overview__main-photo']}
          />
        </div>

        <div className={styles['overview__small-photo-box']}>
          {product.images.map(image => (
            <div
              key={image}
              className={cn(styles['overview__small-photo-wrap'], {
                [styles['overview__small-photo-wrap--active']]:
                  image === mainPhoto,
              })}
              onClick={() => setMainPhoto(image)}
            >
              <img
                src={image}
                alt=""
                className={styles['overview__small-photo']}
              />
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
          <AddToFavouritesButton item={convertToProductType()} />
        </div>

        <div className={styles['overview__tech-block']}>
          <div className={styles['overview__tech-info']}>
            <p className={styles['overview__tech-name']}>Screen</p>
            <p className={styles['overview__tech-value']}>{product.screen}</p>
          </div>
          <div className={styles['overview__tech-info']}>
            <p className={styles['overview__tech-name']}>Resolution</p>
            <p className={styles['overview__tech-value']}>
              {product.resolution}
            </p>
          </div>
          <div className={styles['overview__tech-info']}>
            <p className={styles['overview__tech-name']}>Processor</p>
            <p className={styles['overview__tech-value']}>
              {product.processor}
            </p>
          </div>
          <div className={styles['overview__tech-info']}>
            <p className={styles['overview__tech-name']}>RAM</p>
            <p className={styles['overview__tech-value']}>{product.ram}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
