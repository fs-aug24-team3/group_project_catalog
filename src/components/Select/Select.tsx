/* eslint-disable import/no-extraneous-dependencies */
import { FC, useEffect } from 'react';
import Select, { PropsValue, SingleValue, StylesConfig } from 'react-select';
import { Option } from '../../types/Options';
import { selectStyles } from '../../utils/selectStyles';
import { useWidth } from '../../hooks/useWidth';
import { useTranslation } from 'react-i18next';

// import './Select.css';
import '../../styles/normalise.scss';

interface Props {
  value: PropsValue<Option>;
  onChange: (selected: SingleValue<Option>) => void;
  options: Option[];
  placeholder: string;
}

export const ProductSelect: FC<Props> = ({
  value,
  onChange,
  options,
  placeholder,
}) => {
  const { t } = useTranslation();
  const { width, updateWidth } = useWidth();

  const isWidthForBiggerSelector =
    placeholder === t('select.newest') ||
    placeholder === t('select.cheapest') ||
    placeholder === t('select.alphabetically');

  const styles: StylesConfig<Option, false> = selectStyles(
    width,
    isWidthForBiggerSelector,
  );

  useEffect(() => {
    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Select<Option>
      value={value}
      isSearchable={false}
      onChange={onChange}
      options={options}
      placeholder={t(`placeholder.${placeholder}`)}
      styles={styles}
    />
  );
};
