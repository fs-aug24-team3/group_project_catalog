/* eslint-disable import/no-extraneous-dependencies */
import { FC, useCallback, useEffect, useState } from 'react';
import Select, { PropsValue, SingleValue, StylesConfig } from 'react-select';
import { Option } from '../../constants/optionsForSelect';
import { selectStyles } from '../../constants/selectStyles';

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
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    setWidth(document.documentElement.clientWidth);
  }, []);

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
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      styles={styles}
    />
  );
};
