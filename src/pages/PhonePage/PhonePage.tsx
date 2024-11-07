/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getCatalogPhones } from '../../api/api';
import { Product } from '../../types/Product';
import { usePagination } from '../../hooks/usePagination';
import { useSortFilters } from '../../hooks/useSortrFilter';
import { getFilteredProducts } from '../../utils/getFilteredProducts';
import {
  optionsForSorting,
  optionsPerPage,
} from '../../constants/optionsForSelect';

import { Loader } from '../../components/Loader';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { PageTitle } from '../../components/PageTitle';
import { ProductList } from '../../components/ProductList';
import { Pagination } from '../../components/Pagination';
import { ProductSelect } from '../../components/Select';

import styles from '../ProductPage.module.scss';

export const PhonePage: React.FC = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchParams] = useSearchParams();

  const sort = searchParams.get('sort') || 'Newest';

  const amount = phones.length;

  const { itemsToShow, selectedPerPage, handlePerPageChange } = usePagination(
    phones,
    amount,
  );

  const { selectedSortField, handleSortFieldChange } = useSortFilters();

  const filteredProducts = useMemo(
    () => getFilteredProducts(itemsToShow, sort),
    [itemsToShow, sort],
  );

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
        <div className={styles['products-page__wrapper']}>
          <BreadCrumbs />

          <PageTitle>Mobile Phones</PageTitle>

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

          <ProductList items={filteredProducts} />

          {selectedPerPage.value !== 'all' && <Pagination total={amount} />}
        </div>
      )}
    </>
  );
};
