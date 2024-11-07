/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getCatalogAccessories } from '../../api/api';
import { Product } from '../../types/Product';
import { usePagination } from '../../hooks/usePagination';
import { useSortFilters } from '../../hooks/useSortrFilter';

import { Loader } from '../../components/Loader';
import { PageTitle } from '../../components/PageTitle';

import { BreadCrumbs } from '../../components/BreadCrumbs';
import { ProductList } from '../../components/ProductList';
import { Pagination } from '../../components/Pagination';
import { ProductSelect } from '../../components/Select';

import {
  optionsForSorting,
  optionsPerPage,
} from '../../constants/optionsForSelect';
import { getFilteredProducts } from '../../utils/getFilteredProducts';

import styles from '../ProductPage.module.scss';

export const AccessoriesPage: React.FC = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const amount = accessories.length;
  const [searchParams] = useSearchParams();

  const sort = searchParams.get('sort') || 'Newest';

  const filteredProducts = useMemo(
    () => getFilteredProducts(accessories, sort),
    [accessories, sort],
  );

  const { itemsToShow, selectedPerPage, handlePerPageChange } = usePagination(
    filteredProducts,
    amount,
  );

  const { selectedSortField, handleSortFieldChange } = useSortFilters();

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
        <div className={styles['products-page__wrapper']}>
          <BreadCrumbs />

          <PageTitle>Accessories</PageTitle>

          <p className={styles['products-page__amount']}>{amount} models</p>

          <div className={styles['products-page__dropdowns']}>
            <div>
              <p className={styles['products-page__label']}>Sort by</p>
              <ProductSelect
                placeholder={selectedSortField.label}
                value={selectedSortField}
                options={optionsForSorting}
                onChange={handleSortFieldChange}
              />
            </div>

            <div>
              <p className={styles['products-page__label']}>Items on page</p>

              <ProductSelect
                value={selectedPerPage}
                onChange={handlePerPageChange}
                options={optionsPerPage}
                placeholder={selectedPerPage.label}
              />
            </div>
          </div>

          <ProductList items={itemsToShow} />

          {selectedPerPage.value !== 'All' && <Pagination total={amount} />}
        </div>
      )}
    </>
  );
};
