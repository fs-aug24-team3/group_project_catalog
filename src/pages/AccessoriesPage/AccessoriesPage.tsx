/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { getCatalogAccessories } from '../../api/api';

import { ProductPage } from '../../components/ProductPage/ProductPage';

export const AccessoriesPage: React.FC = () => {
  return (
    <ProductPage
      title={'pageTitle.accessories'}
      fetchProduct={getCatalogAccessories}
    />
  );
};
