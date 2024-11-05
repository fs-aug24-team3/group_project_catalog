import {
  FC,
  //  useState
} from 'react';
import { Product } from '../../types/Product';
import { ProductList } from '../ProductList';

import mainStyle from '../../styles/App.module.scss';
import styles from './ProductPage.module.scss';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { PageTitle } from '../PageTitle';
// import { ProductSelect } from '../Select';
import { Pagination } from '../Pagination';

interface Props {
  title: string;
  amount: number;
  items: Product[];
}

// type Options = {
//   value: string;
//   label: string;
// };

// const options: Options[] = [
//   {
//     value: 'newest',
//     label: 'Newest',
//   },

//   {
//     value: 'alphabetically',
//     label: 'Alphabetically',
//   },

//   {
//     value: 'cheapest',
//     label: 'Cheapest',
//   },
// ];

// const optionsPage: Options[] = [
//   {
//     value: 'all',
//     label: 'All',
//   },
//   {
//     value: '4',
//     label: '4',
//   },

//   {
//     value: '8',
//     label: '8',
//   },

//   {
//     value: '16',
//     label: '16',
//   },
// ];

export const ProductPage: FC<Props> = ({ title, amount, items }) => {
  // const [selectedOption, setSelectedOption] = useState('newest');
  // const [selectedOptionPage, setSelectedOptionPage] = useState('all');

  // const handleChange = selected => {
  //   console.log(selected);

  //   setSelectedOption(selected);
  // };

  // const handleChangePage = selected => {
  //   setSelectedOptionPage(selected);
  // };

  return (
    <div className={mainStyle.container && styles['products-page__wrapper']}>
      <BreadCrumbs />

      <PageTitle>{title}</PageTitle>

      <p className={styles['products-page__amount']}>{amount} models</p>

      <div className={styles['products-page__dropdowns']}>
        <div>
          <p className={styles['products-page__label']}>Sort by</p>
          {/* <ProductSelect
            value={selectedOption}
            onChange={handleChange}
            options={options}
            placeholder="Newest"
          /> */}
        </div>

        <div>
          <p className={styles['products-page__label']}>Items on page</p>
          {/* <ProductSelect
            value={selectedOptionPage}
            onChange={handleChangePage}
            options={optionsPage}
            placeholder="All"
          /> */}
        </div>
      </div>

      <ProductList items={items} />

      <Pagination />
    </div>
  );
};
