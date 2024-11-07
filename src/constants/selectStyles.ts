// eslint-disable-next-line import/no-extraneous-dependencies
import {
  ControlProps,
  CSSObjectWithLabel,
  OptionProps,
  StylesConfig,
} from 'react-select';
import { Option } from './optionsForSelect';

export const selectStyles = (
  width: number,
  isWidthForBiggerSelector: boolean,
): StylesConfig<Option, false> => {
  return {
    indicatorSeparator: (provided: CSSObjectWithLabel) => ({
      ...provided,
      display: 'none',
    }),

    singleValue: (provided: CSSObjectWithLabel) => ({
      ...provided,
      color: '#0F0F11',
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '21px',
    }),

    control: (
      provided: CSSObjectWithLabel,
      state: ControlProps<Option, false>,
    ) => ({
      ...provided,
      width: width > 640 && isWidthForBiggerSelector ? '176px' : '136px',
      height: '40px',
      borderRadius: '8px',
      borderColor: state.isFocused ? '#0F0F11' : '#B4BDC3',
      boxShadow: 'none',
    }),

    option: (
      provided: CSSObjectWithLabel,
      state: OptionProps<Option, false>,
    ) => ({
      ...provided,

      borderRadius: state.isSelected ? '8px' : '',
      backgroundColor: state.isSelected ? '#FAFBFC' : '#FFF',
      color: state.isSelected ? '#0F0F11' : '#89939A',
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '21px',

      '&:hover': {
        backgroundColor: '#FAFBFC',
        color: '#0F0F11',
      },
    }),

    menu: (provided: CSSObjectWithLabel) => ({
      ...provided,
      width: '176px',
      borderRadius: '8px',
      borderColor: '#E2E6E9',
      backgroundColor: '#FFF',
    }),
  };
};
