/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { getCatalogTablets } from '../../api/api';

import { ProductPage } from '../../components/ProductPage/ProductPage';

export const TabletsPage: React.FC = () => {
  return (
    <ProductPage title={'pageTitle.tablets'} fetchProduct={getCatalogTablets} />
  );
};
