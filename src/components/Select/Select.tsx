/* eslint-disable import/no-extraneous-dependencies */
import { FC, useEffect } from 'react';
import Select, { PropsValue, SingleValue, StylesConfig } from 'react-select';
import { Option } from '../../constants/optionsForSelect';
import { selectStyles } from '../../constants/selectStyles';
import { useWidth } from '../../hooks/useWidth';

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
  const { width, updateWidth } = useWidth();

  const isWidthForBiggerSelector =
    placeholder === 'Newest' ||
    placeholder === 'Cheapest' ||
    placeholder === 'Alphabetically';

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
      placeholder={placeholder}
      styles={styles}
    />
  );
};
