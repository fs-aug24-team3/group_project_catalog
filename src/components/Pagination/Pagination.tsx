import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';

import { getNumbers } from '../../utils/getNumberOfPages';

import arrowRigth from '../../images/Icons/arrow-right-black.svg';
import arrowLeft from '../../images/Icons/arrow-left-black.svg';

import styles from './Pagination.module.scss';

interface Props {
  total: number;
}

export const Pagination: FC<Props> = ({ total }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const perPage = searchParams.get('perPage') || 'all';
  const currentPageFromURL = searchParams.get('page') || '1';

  const amountOfPages = getNumbers(1, Math.ceil(total / +perPage));

  const currentPage = +currentPageFromURL;

  const pagesPerBlock = 4;
  const currentBlock = Math.floor((currentPage - 1) / pagesPerBlock);
  const startPage = currentBlock * pagesPerBlock + 1;
  const endPage = Math.min(startPage + pagesPerBlock - 1, amountOfPages.length);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleArrowPageChange = (direction: 'prev' | 'next') => {
    let newPage = currentPage;

    if (direction === 'next') {
      newPage =
        currentPage < amountOfPages.length
          ? currentPage + 1
          : amountOfPages.length;
    }

    if (direction === 'prev') {
      newPage = currentPage > 1 ? currentPage - 1 : 1;
    }

    const params = new URLSearchParams(searchParams);

    params.set('page', newPage.toString());
    if (newPage.toString() === '1') {
      params.delete('page');
    }

    setSearchParams(params);
    scrollToTop();
  };

  const handlePageChange = (page: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', page);
    if (page === '1') {
      params.delete('page');
    }

    setSearchParams(params);
    scrollToTop();
  };

  const isLastPage = currentPage === amountOfPages.length;
  const isFirstPage = currentPage === 1;

  return (
    <div className={styles.pagination}>
      <button
        className={cn(styles['pagination__item--arrows'], {
          [styles.disabled]: isFirstPage,
        })}
        onClick={() => {
          handleArrowPageChange('prev');
        }}
      >
        <img src={arrowLeft} alt="arrow left" />
      </button>

      <ul className={styles.pagination__list}>
        {amountOfPages.slice(startPage - 1, endPage).map(page => (
          <li key={page}>
            <button
              type="button"
              className={cn(styles.pagination__item, {
                [styles.pagination__active]: currentPage === page,
              })}
              onClick={() => handlePageChange(page.toString())}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>

      <button
        className={cn(styles['pagination__item--arrows'], {
          [styles.disabled]: isLastPage,
        })}
        onClick={() => {
          handleArrowPageChange('next');
        }}
      >
        <img src={arrowRigth} alt="arrow-right" />
      </button>
    </div>
  );
};
