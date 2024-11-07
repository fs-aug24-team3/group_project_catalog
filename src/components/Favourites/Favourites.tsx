import { FC, useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { ProductList } from '../ProductList';

import styles from './Favourites.module.scss';
import { PageTitle } from '../PageTitle';
import { BreadCrumbs } from '../BreadCrumbs';

interface Props {
  title: string;
}

export const Favourites: FC<Props> = ({ title }) => {
  const [favourites, setFavourites] = useState<Product[]>([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(
      localStorage.getItem('favourites') || '[]',
    );

    setFavourites(savedFavourites);
  }, []);

  const removeFromFavourites = (id: number) => {
    setFavourites(prevFavourites =>
      prevFavourites.filter(item => item.id !== id),
    );
  };

  return (
    <div className={styles['favourites-page__wrapper']}>
      <BreadCrumbs />
      <PageTitle>{title}</PageTitle>

      {favourites.length > 0 && (
        <p className={styles['favourites-page__amount']}>
          {favourites.length} {favourites.length === 1 ? 'item' : 'items'}
        </p>
      )}

      <ProductList
        items={favourites}
        onRemoveFromFavourites={removeFromFavourites}
      />
    </div>
  );
};
