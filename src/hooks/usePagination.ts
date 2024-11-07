/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SingleValue } from 'react-select';

import { Option } from '../constants/optionsForSelect';
import { Product } from '../types/Product';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

export const usePagination = (items: Product[], amount: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const perPage = searchParams.get('perPage') || 'All';
  const [selectedPerPage, setSelectedPerPage] = useState<Option>({
    label: capitalizeFirstLetter(perPage),
    value: perPage,
  });

  const currentPage = searchParams.get('page') || '1';

  let itemsToShow = [...items];

  if (selectedPerPage.value !== 'All') {
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
    handlePerPageChange,
    itemsToShow,
  };
};
