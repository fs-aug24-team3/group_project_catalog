/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC } from 'react';

import styles from './RadioInputs.module.scss';

import cn from 'classnames';
import { DetailedProduct } from '../../../../types/DetailedProduct';
import { getColor } from '../../../../utils/getColor';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
  product: DetailedProduct;
  selectedColor: string;
  onSelectColor: React.Dispatch<React.SetStateAction<string>>;
  selectedCapacity: string;
  onSelectCapacity: React.Dispatch<React.SetStateAction<string>>;
}

export const RadioInputs: FC<Props> = ({
  product,
  selectedColor,
  onSelectColor,
  selectedCapacity,
  onSelectCapacity,
}) => {
  const { t } = useTranslation();
  const preparedSelectedColor = selectedColor
    .toLowerCase()
    .trim()
    .split(' ')
    .join('');

  const navigate = useNavigate();
  const location = useLocation();

  const category = location.pathname.split('/')[1];

  const handleColorChange = (color: string) => {
    const preparedColor = color.toLowerCase().trim().split(' ').join('');

    onSelectColor(preparedColor);
    const newUrl = `/${category}/${product.namespaceId}-${selectedCapacity.toLowerCase()}-${color.split(' ').join('-')}`;

    navigate(newUrl, { replace: true });
  };

  const handleCapacityChange = (capacity: string) => {
    onSelectCapacity(capacity);
    const newUrl = `/${category}/${product.namespaceId}-${capacity.toLowerCase()}-${selectedColor.split(' ').join('-')}`;

    navigate(newUrl, { replace: true });
  };

  return (
    <div className={styles.radio}>
      <div className={styles.radio__input}>
        <p className={styles.radio__title}>{t('details.title.color')}</p>

        <div className={styles.radio__items}>
          {product.colorsAvailable.map(color => {
            const preparedColor = color
              .toLowerCase()
              .trim()
              .split(' ')
              .join('');

            return (
              <label
                key={color}
                className={cn(styles.radio__color, {
                  [styles['radio__color--selected']]:
                    preparedColor === preparedSelectedColor,
                })}
              >
                <input
                  type="radio"
                  name="color"
                  value={color}
                  onChange={() => handleColorChange(color)}
                />
                <span
                  className={styles['radio__color--circle']}
                  style={{ backgroundColor: getColor(preparedColor) }}
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className={styles.radio__input}>
        <p className={styles.radio__title}>{t('details.title.capacity')}</p>

        <div className={styles.radio__items}>
          {product.capacityAvailable.map(capacity => (
            <label
              key={capacity}
              className={cn(styles.radio__capacity, {
                [styles['radio__capacity--selected']]:
                  capacity === selectedCapacity,
              })}
            >
              <input
                type="radio"
                name="capacity"
                value={capacity}
                onChange={() => handleCapacityChange(capacity)}
              />
              {capacity}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
