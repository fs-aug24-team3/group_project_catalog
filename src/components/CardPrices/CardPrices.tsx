import { FC } from 'react';
import styles from './CardPrices.module.scss';

type Props = {
  price: number;
  fullPrice: number;
  onSale?: boolean;
};

export const CardPrices: FC<Props> = ({ price, fullPrice, onSale }) => {
  return (
    <div className={styles.card__price}>
      <p className={styles['card__price--value']}>${price}</p>
      {onSale && (
        <p className={styles['card__price--old-value']}>${fullPrice}</p>
      )}
    </div>
  );
};
