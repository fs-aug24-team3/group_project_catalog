import { FC, useCallback, useEffect, useState } from 'react';

import productsStyles from '../../ProductDetailsPage.module.scss';
import styles from './TechSpecs.module.scss';
import { DetailedProduct } from '../../../../types/DetailedProduct';

interface Props {
  product: DetailedProduct;
}

export const TechSpecs: FC<Props> = ({ product }) => {
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    setWidth(document.documentElement.clientWidth);
  }, []);

  useEffect(() => {
    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles['tech-specs']}>
      <h3 className={productsStyles.details__subtitle}>Tech specs</h3>

      <div className={styles['tech-specs__box']}>
        <div className={styles['tech-specs__wrap']}>
          <p className={styles['tech-specs__name']}>Screen</p>
          <p className={styles['tech-specs__data']}>{product?.screen}</p>
        </div>
        <div className={styles['tech-specs__wrap']}>
          <p className={styles['tech-specs__name']}>Resolution</p>
          <p className={styles['tech-specs__data']}>{product?.resolution}</p>
        </div>
        <div className={styles['tech-specs__wrap']}>
          <p className={styles['tech-specs__name']}>RAM</p>
          <p className={styles['tech-specs__data']}>{product?.ram}</p>
        </div>
        <div className={styles['tech-specs__wrap']}>
          <p className={styles['tech-specs__name']}>Built in memory</p>
          <p className={styles['tech-specs__data']}>{product?.capacity}</p>
        </div>
        {product?.category !== 'accessories' && (
          <>
            <div className={styles['tech-specs__wrap']}>
              <p className={styles['tech-specs__name']}>Camera</p>
              <p className={styles['tech-specs__data']}>{product?.camera}</p>
            </div>
            <div className={styles['tech-specs__wrap']}>
              <p className={styles['tech-specs__name']}>Zoom</p>
              <p className={styles['tech-specs__data']}>{product?.zoom}</p>
            </div>
          </>
        )}

        {!product.cell.includes('Not applicable') && (
          <div className={styles['tech-specs__wrap']}>
            <p className={styles['tech-specs__name']}>Cell</p>
            <p className={styles['tech-specs__data']}>
              {width < 400
                ? product?.cell.slice(0, 4).join(', ')
                : product?.cell.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
