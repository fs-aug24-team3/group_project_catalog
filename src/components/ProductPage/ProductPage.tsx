/* eslint-disable import/no-extraneous-dependencies */
import { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Product } from '../../types/Product';
import { useSearchParams } from 'react-router-dom';
import { getFilteredProducts } from '../../utils/getFilteredProducts';
import { usePagination } from '../../hooks/usePagination';
import { useSortFilters } from '../../hooks/useSortrFilter';
import { Loader } from '../Loader';
import { BreadCrumbs } from '../BreadCrumbs';
import { PageTitle } from '../PageTitle';
import { ProductSelect } from '../Select';

import { ProductList } from '../ProductList';

import styles from './ProductPage.module.scss';
import { Pagination } from '../Pagination';
import { ErrorBlock } from '../ErrorBlock';
import { NotFoundProductMessage } from '../NotFoundProductMessage';
import { SearchInput } from '../SearchInput';

import { useOptionsForSorting } from '../../hooks/useOptionsForSorting';
import { useOptionsPerPage } from '../../hooks/useOptionsPerPage';

interface Props {
  title: string;
  fetchProduct: () => Promise<Product[]>;
}

export const ProductPage: FC<Props> = ({ title, fetchProduct }) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoadedData, setIsLoadedData] = useState(false);

  const { t, i18n } = useTranslation();

  const amount = product.length;

  const [searchParams] = useSearchParams();

  const sort = searchParams.get('sort') || 'newest';
  const query = searchParams.get('query') || '';

  const filteredProducts = useMemo(
    () => getFilteredProducts(product, sort, query),
    [product, sort, query],
  );

  const {
    itemsToShow,
    selectedPerPage,
    setSelectedPerPage,
    handlePerPageChange,
  } = usePagination(filteredProducts, amount);

  const sortingOptions = useOptionsForSorting();
  const perPageOptions = useOptionsPerPage();

  const { selectedSortField, setSelectedSortField, handleSortFieldChange } =
    useSortFilters();

  const handleLoadProducts = () => {
    setError('');
    setIsLoading(true);
    setIsLoadedData(false);

    fetchProduct()
      .then(data => {
        setProduct(data);
        setIsLoadedData(true);
      })
      .catch(() => setError('Something went wrong! Please try again!'))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const reload = () => {
    handleLoadProducts();
  };

  useEffect(() => {
    handleLoadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchProduct]);

  useEffect(() => {
    setSelectedSortField(prev => ({
      ...prev,
      label: t(`select.${prev.value}`),
    }));
    setSelectedPerPage(prev => ({
      ...prev,
      label: prev.value === 'all' ? t(`select.${prev.value}`) : prev.value,
    }));
  }, [i18n.language, t, setSelectedSortField, setSelectedPerPage]);

  return (
    <>
      {isLoading && <Loader />}

      {error && !isLoading && (
        <ErrorBlock errorMessage={error} reload={reload} />
      )}

      {amount === 0 && !error && !isLoading && isLoadedData && (
        <NotFoundProductMessage title={title} />
      )}

      {!isLoading && !error && !!amount && isLoadedData && (
        <div className={styles['products-page__wrapper']}>
          <BreadCrumbs title={title} />

          <PageTitle>{t(`${title}`)}</PageTitle>

          <p className={styles['products-page__amount']}>
            {amount}{' '}
            {amount === 124 || amount === 34
              ? t('page.models')
              : t('page.models1')}
          </p>

          <div className={styles['products-page__dropdowns']}>
            <div>
              <p className={styles['products-page__label']}>Search</p>
              <SearchInput query={query} />
            </div>

            <div className={styles['products-page__selects']}>
              <div>
                <p className={styles['products-page__label']}>{t('page.sort')}</p>
                <ProductSelect
                  placeholder={selectedSortField.label}
                  value={selectedSortField}
                  options={optionsForSorting}
                  onChange={handleSortFieldChange}
                />
              </div>

              <div>
                <p className={styles['products-page__label']}>
                  {t('page.perPage')}
                </p>
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
            <NotFoundProductMessage title={title} noFilterTitle="a" />
          ) : (
            <>
              <ProductList items={itemsToShow} />

              {selectedPerPage.value !== 'all' && !!amount && (
                <Pagination total={amount} />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};
