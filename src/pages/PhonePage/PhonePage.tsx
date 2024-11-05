import React, { useEffect, useState } from 'react';

import { getCatalogPhones } from '../../api/api';
import { Product } from '../../types/Product';
import { ProductPage } from '../../components/ProductPage';
import { Loader } from '../../components/Loader';

export const PhonePage: React.FC = () => {
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
        <ProductPage
          title="Mobile phones"
          amount={phones.length}
          items={phones}
        />
      )}
    </>
  );
};
