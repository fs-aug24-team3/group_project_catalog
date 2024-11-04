import React, { useEffect, useState } from 'react';

import { getCatalogAccessories } from '../../api/api';
import { Product } from '../../types/Product';

export const AccessoriesPage: React.FC = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    setIsLoading(true);

    getCatalogAccessories()
      .then(setAccessories)
      .catch(() => 'Unable to load accessories catalog')
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Accessories Page</h1>
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {!!accessories.length && <p>Accessories</p>}
    </>
  );
};
