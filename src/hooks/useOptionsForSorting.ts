/* eslint-disable import/no-extraneous-dependencies */
import { useTranslation } from 'react-i18next';
import { Option } from '../types/Options';

export const useOptionsForSorting = (): Option[] => {
  const { t } = useTranslation();

  return [
    {
      value: 'newest',
      label: t('select.newest'),
    },
    {
      value: 'alphabetically',
      label: t('select.alphabetically'),
    },
    {
      value: 'cheapest',
      label: t('select.cheapest'),
    },
  ];
};
