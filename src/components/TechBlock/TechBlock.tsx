import { FC } from 'react';
import { DetailedProduct } from '../../types/DetailedProduct';
import styles from './TechBlock.module.scss';

interface Props {
  product: DetailedProduct;
}

export const TechBlock: FC<Props> = ({ product }) => {
  return (
    <div className={styles['tech-block']}>
      <div className={styles['tech-block__info']}>
        <p className={styles['tech-block__name']}>Screen</p>
        <p className={styles['tech-block__value']}>{product.screen}</p>
      </div>
      <div className={styles['tech-block__info']}>
        <p className={styles['tech-block__name']}>Resolution</p>
        <p className={styles['tech-block__value']}>{product.resolution}</p>
      </div>
      <div className={styles['tech-block__info']}>
        <p className={styles['tech-block__name']}>Processor</p>
        <p className={styles['tech-block__value']}>{product.processor}</p>
      </div>
      <div className={styles['tech-block__info']}>
        <p className={styles['tech-block__name']}>RAM</p>
        <p className={styles['tech-block__value']}>{product.ram}</p>
      </div>
    </div>
  );
};
