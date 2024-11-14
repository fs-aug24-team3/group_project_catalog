/* eslint-disable import/no-extraneous-dependencies */
import { useTranslation } from 'react-i18next';
import { Option } from '../types/Options';

export const useOptionsPerPage = (): Option[] => {
  const { t } = useTranslation();

  return [
    {
      value: 'all',
      label: t('select.all'),
    },
    {
      value: '4',
      label: '4',
    },

    {
      value: '8',
      label: '8',
    },

    {
      value: '16',
      label: '16',
    },
  ];
};
