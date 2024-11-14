/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SingleValue } from 'react-select';

import { Option } from '../types/Options';
import { Product } from '../types/Product';

import { useTranslation } from 'react-i18next';

export const usePagination = (items: Product[], amount: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const perPage = searchParams.get('perPage') || 'all';

  const { t } = useTranslation();

  const [selectedPerPage, setSelectedPerPage] = useState<Option>({
    label: perPage === 'all' ? t(`select.${perPage}`) : perPage,
    value: perPage,
  });

  let itemsToShow = [...items];

  const currentPage = searchParams.get('page') || '1';

  if (selectedPerPage.value !== 'all') {
    const indexOfLastItem = +currentPage * +selectedPerPage.value;
    const indexOfFirstItem = indexOfLastItem - +selectedPerPage.value;
    const itemTo = Math.min(indexOfLastItem, amount);

    itemsToShow = items.slice(indexOfFirstItem, itemTo);
  }

  const handlePerPageChange = (selected: SingleValue<Option>) => {
    if (selected) {
      setSelectedPerPage(selected);

      const params = new URLSearchParams(searchParams);

      params.set('perPage', selected.value.toLowerCase());
      params.delete('page');
      if (selected.value === 'All') {
        params.delete('perPage');
      }

      setSearchParams(params);
    }
  };

  return {
    selectedPerPage,
    setSelectedPerPage,
    handlePerPageChange,
    itemsToShow,
  };
};
