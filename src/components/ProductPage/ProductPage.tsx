import { FC } from 'react';
import { Product } from '../../types/Product';
import { ProductList } from '../ProductList';

import mainStyle from '../../styles/App.module.scss';
import styles from './ProductPage.module.scss';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { PageTitle } from '../PageTitle';

interface Props {
  title: string;
  amount: number;
  items: Product[];
}

export const ProductPage: FC<Props> = ({ title, amount, items }) => {
  return (
    <div className={mainStyle.container && styles['products-page__wrapper']}>
      <BreadCrumbs />

      <PageTitle>{title}</PageTitle>

      <p className={styles['products-page__amount']}>{amount} models</p>

      <div className={styles['products-page__dropdowns']}>
        <div>
          <p className={styles['products-page__label']}>Sort by</p>
        </div>

        <div>
          <p className={styles['products-page__label']}>Items on page</p>
        </div>
      </div>

      <ProductList items={items} />
    </div>
  );
};
