/* eslint-disable import/no-extraneous-dependencies */
import { FC, useEffect } from 'react';

import productsStyles from '../../ProductDetailsPage.module.scss';
import styles from './TechSpecs.module.scss';
import { DetailedProduct } from '../../../../types/DetailedProduct';
import { useWidth } from '../../../../hooks/useWidth';
import { useTranslation } from 'react-i18next';

interface Props {
  product: DetailedProduct;
}

export const TechSpecs: FC<Props> = ({ product }) => {
  const { updateWidth, width } = useWidth();

  const { t } = useTranslation();

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
      <h3 className={productsStyles.details__subtitle}>
        {t('details.title.tech_specs')}
      </h3>

      <div className={styles['tech-specs__box']}>
        <div className={styles['tech-specs__wrap']}>
          <p className={styles['tech-specs__name']}>{t('details.screen')}</p>
          <p className={styles['tech-specs__data']}>{product?.screen}</p>
        </div>
        <div className={styles['tech-specs__wrap']}>
          <p className={styles['tech-specs__name']}>
            {t('details.resolution')}
          </p>
          <p className={styles['tech-specs__data']}>{product?.resolution}</p>
        </div>
        <div className={styles['tech-specs__wrap']}>
          <p className={styles['tech-specs__name']}>{t('details.ram')}</p>
          <p className={styles['tech-specs__data']}>{product?.ram}</p>
        </div>
        <div className={styles['tech-specs__wrap']}>
          <p className={styles['tech-specs__name']}>
            {t('details.built_in_memory')}
          </p>
          <p className={styles['tech-specs__data']}>{product?.capacity}</p>
        </div>
        {product?.category !== 'accessories' && (
          <>
            <div className={styles['tech-specs__wrap']}>
              <p className={styles['tech-specs__name']}>
                {t('details.camera')}
              </p>
              <p className={styles['tech-specs__data']}>{product?.camera}</p>
            </div>
            <div className={styles['tech-specs__wrap']}>
              <p className={styles['tech-specs__name']}>{t('details.zoom')}</p>
              <p className={styles['tech-specs__data']}>{product?.zoom}</p>
            </div>
          </>
        )}

        {!product.cell.includes('Not applicable') && (
          <div className={styles['tech-specs__wrap']}>
            <p className={styles['tech-specs__name']}>{t('details.cell')}</p>
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
