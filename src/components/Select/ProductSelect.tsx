/* eslint-disable import/no-extraneous-dependencies */

import { FC, useCallback, useEffect, useState } from 'react';
import Select from 'react-select';

type Options = {
  value: string;
  label: string;
};

interface Props {
  value: Options;
  onChange: (selected: Options) => void;
  options: Options[];
  placeholder: string;
}

export const ProductSelect: FC<Props> = ({
  value,
  // onChange,
  options,
  placeholder,
}) => {
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    setWidth(document.documentElement.clientWidth);
  }, []);

  useEffect(() => {
    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Select
      value={value}
      // onChange={onChange}
      options={options}
      placeholder={placeholder}
      styles={{
        placeholder: provided => ({
          ...provided,
          color: '#0F0F11',
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '21px',
        }),
        indicatorSeparator: provided => ({
          ...provided,
          display: 'none',
        }),

        control: provided => ({
          ...provided,
          width: width > 640 && placeholder === 'Newest' ? '176px' : '136px',
          height: '40px',
          borderRadius: '8px',
          border: '1px solid var(--gray-icons-placeholders, #B4BDC3)',
        }),
      }}
      // unstyled
    />
  );
};
