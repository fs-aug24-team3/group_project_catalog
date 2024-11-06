import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { Loader } from '../../components/Loader';
import { getCatalogPhones } from '../../api/api';
import { Favourites } from '../../components/Favourites';

export const FavouritesPage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    setIsLoading(true);

    getCatalogPhones()
      .then(setPhones)
      .catch(() => 'Unable to load phones catalog')
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && !!phones.length && !error && (
        <Favourites title="Favourites" />
      )}
    </>
  );
};
