import React, { useEffect, useState } from 'react';

import { getCatalogAccessories } from '../../api/api';
import { Product } from '../../types/Product';
import { ProductPage } from '../../components/ProductPage';
import { Loader } from '../../components/Loader';

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
      {isLoading && <Loader />}

      {!isLoading && !error && !!accessories.length && (
        <ProductPage
          title="Accessories"
          amount={accessories.length}
          items={accessories}
        />
      )}
    </>
  );
};
