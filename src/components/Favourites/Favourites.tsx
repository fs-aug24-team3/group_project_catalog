/* eslint-disable import/no-extraneous-dependencies */
import { FC, useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { ProductList } from '../ProductList';

import styles from './Favourites.module.scss';
import { PageTitle } from '../PageTitle';
import { BreadCrumbs } from '../BreadCrumbs';
import { EmptyFavourites } from '../EmptyFavourites';
import { useTranslation } from 'react-i18next';
import { getItemEnds } from '../../utils/getItemEnds';

interface Props {
  title: string;
}

export const Favourites: FC<Props> = ({ title }) => {
  const [favourites, setFavourites] = useState<Product[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    const savedFavourites = JSON.parse(
      localStorage.getItem('favourites') || '[]',
    );

    setFavourites(savedFavourites);
  }, []);

  const removeFromFavourites = (id: number | string) => {
    setFavourites(prevFavourites =>
      prevFavourites.filter(item => item.id !== id),
    );
  };

  return (
    <div className={styles['favourites-page__wrapper']}>
      <BreadCrumbs title={title} />
      <PageTitle>{t(title)}</PageTitle>

      {favourites.length > 0 ? (
        <p className={styles['favourites-page__amount']}>
          {favourites.length} {t(getItemEnds(favourites.length))}
        </p>
      ) : (
        <EmptyFavourites />
      )}

      <ProductList
        items={favourites}
        onRemoveFromFavourites={removeFromFavourites}
      />
    </div>
  );
};
