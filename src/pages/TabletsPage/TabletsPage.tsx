import React, { useEffect, useState } from 'react';

import { getCatalogTablets } from '../../api/api';
import { Product } from '../../types/Product';

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
      <h1>Tablets Page</h1>
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {!!tablets.length && <p>Tablets</p>}
    </>
  );
};
