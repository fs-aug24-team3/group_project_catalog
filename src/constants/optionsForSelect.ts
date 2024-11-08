export type Option = {
  label: string;
  value: string;
};

export const optionsForSorting: Option[] = [
  {
    value: 'newest',
    label: 'Newest',
  },

  {
    value: 'alphabetically',
    label: 'Alphabetically',
  },

  {
    value: 'cheapest',
    label: 'Cheapest',
  },
];

export const optionsPerPage: Option[] = [
  {
    value: 'All',
    label: 'All',
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
