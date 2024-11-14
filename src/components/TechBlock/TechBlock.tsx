/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import { DetailedProduct } from '../../types/DetailedProduct';
import styles from './TechBlock.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  product: DetailedProduct;
}

export const TechBlock: FC<Props> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className={styles['tech-block']}>
      <div className={styles['tech-block__info']}>
        <p className={styles['tech-block__name']}>{t('details.screen')}</p>
        <p className={styles['tech-block__value']}>{product.screen}</p>
      </div>

      <div className={styles['tech-block__info']}>
        <p className={styles['tech-block__name']}>{t('details.resolution')}</p>
        <p className={styles['tech-block__value']}>{product.resolution}</p>
      </div>

      <div className={styles['tech-block__info']}>
        <p className={styles['tech-block__name']}>{t('details.processor')}</p>
        <p className={styles['tech-block__value']}>{product.processor}</p>
      </div>

      <div className={styles['tech-block__info']}>
        <p className={styles['tech-block__name']}> {t('details.ram')}</p>
        <p className={styles['tech-block__value']}>{product.ram}</p>
      </div>
    </div>
  );
};
