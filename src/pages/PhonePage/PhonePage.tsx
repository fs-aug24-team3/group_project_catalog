/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { getCatalogPhones } from '../../api/api';

import { ProductPage } from '../../components/ProductPage/ProductPage';

export const PhonePage: React.FC = () => {
  return <ProductPage title="Mobile phones" fetchProduct={getCatalogPhones} />;
};
