import React, { useEffect, useState } from 'react';

import { getCatalogPhones } from '../../api/api';
import { Product } from '../../types/Product';

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
      <h1>Phone Page</h1>
      {isLoading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {!!phones.length && <p>phones catalog</p>}
    </>
  );
};
