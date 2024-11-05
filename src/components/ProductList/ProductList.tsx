import { FC } from 'react';
import { Product } from '../../types/Product';
import { ProductCard } from '../ProductCard';

import styles from './ProductList.module.scss';

interface Props {
  items: Product[];
}

export const ProductList: FC<Props> = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <ProductCard key={item.id} />
      ))}
    </ul>
  );
};
