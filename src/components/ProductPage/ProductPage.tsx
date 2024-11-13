import { FC, useEffect, useMemo, useState } from 'react';
import { Product } from '../../types/Product';
import { useSearchParams } from 'react-router-dom';
import { getFilteredProducts } from '../../utils/getFilteredProducts';
import { usePagination } from '../../hooks/usePagination';
import { useSortFilters } from '../../hooks/useSortrFilter';
import { Loader } from '../Loader';
import { BreadCrumbs } from '../BreadCrumbs';
import { PageTitle } from '../PageTitle';
import { ProductSelect } from '../Select';
import {
  optionsForSorting,
  optionsPerPage,
} from '../../constants/optionsForSelect';
import { ProductList } from '../ProductList';

import styles from './ProductPage.module.scss';
import { Pagination } from '../Pagination';
import { ErrorBlock } from '../ErrorBlock';
import { NotFoundProductMessage } from '../NotFoundProductMessage';
import { SearchInput } from '../SearchInput';

interface Props {
  title: string;
  fetchProduct: () => Promise<Product[]>;
}

export const ProductPage: FC<Props> = ({ title, fetchProduct }) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const amount = product.length;

  const [searchParams] = useSearchParams();

  const sort = searchParams.get('sort') || 'Newest';
  const query = searchParams.get('query') || '';

  const filteredProducts = useMemo(
    () => getFilteredProducts(product, sort, query),
    [product, sort, query],
  );

  const { itemsToShow, selectedPerPage, handlePerPageChange } = usePagination(
    filteredProducts,
    amount,
  );

  const { selectedSortField, handleSortFieldChange } = useSortFilters();

  const handleLoadProducts = () => {
    setError('');
    setIsLoading(true);

    fetchProduct()
      .then(setProduct)
      .catch(() => setError('Something went wrong! Please try again!'))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    handleLoadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProduct]);

  const reload = () => {
    handleLoadProducts();
  };

  return (
    <>
      {isLoading && <Loader />}

      {error && !isLoading && (
        <ErrorBlock errorMessage={error} reload={reload} />
      )}

      {amount === 0 && !error && !isLoading && (
        <NotFoundProductMessage title={title} />
      )}

      {!isLoading && !error && !!amount && (
        <div className={styles['products-page__wrapper']}>
          <BreadCrumbs />

          <PageTitle>{title}</PageTitle>

          <p className={styles['products-page__amount']}>{amount} models</p>

          <div className={styles['products-page__dropdowns']}>
            <div>
              <p className={styles['products-page__label']}>Search</p>
              <SearchInput query={query} />
            </div>

            <div className={styles['products-page__selects']}>
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
          </div>

          {itemsToShow.length === 0 ? (
            <NotFoundProductMessage title={title} />
          ) : (
            <>
              <ProductList items={itemsToShow} />

              {selectedPerPage.value !== 'All' && !!amount && (
                <Pagination total={amount} />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};
