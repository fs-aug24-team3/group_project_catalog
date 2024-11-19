import { FC } from 'react';
import styles from './CardPrices.module.scss';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

type Props = {
  price: number;
  fullPrice: number;
  onSale?: boolean;
};

export const CardPrices: FC<Props> = ({ price, fullPrice, onSale }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={styles.card__price}>
      <p className={styles['card__price--value']}>${price}</p>
      {onSale && (
        <p className={`${styles['card__price--old-value']} ${styles[theme]}`}>
          ${fullPrice}
        </p>
      )}
    </div>
  );
};
