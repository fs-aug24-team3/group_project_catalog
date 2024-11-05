import React, { useEffect, useState } from 'react';

import { getCatalogTablets } from '../../api/api';
import { Product } from '../../types/Product';
import { ProductPage } from '../../components/ProductPage';
import { Loader } from '../../components/Loader';

export const TabletsPage: React.FC = () => {
  const [tablets, setTablets] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    setIsLoading(true);

    getCatalogTablets()
      .then(setTablets)
      .catch(() => 'Unable to load tablets catalog')
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && !error && !!tablets.length && (
        <ProductPage title="Tablets" amount={tablets.length} items={tablets} />
      )}
    </>
  );
};
