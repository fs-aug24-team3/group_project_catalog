import React from 'react';
import imageNotFound from '../../images/notFoundImage/page-not-found.png';
// eslint-disable-next-line max-len
import imageNotFoundDark from '../../images/notFoundImage/page-not-found-dark.png';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const NotFoundPage: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      <div className={styles.notFound}>
        <img
          src={theme === 'light' ? imageNotFound : imageNotFoundDark}
          alt="image of not found page"
          className={styles.notFound__image}
        />
        <h2 className={styles.notFound__title}>Page not found</h2>
        <Link to={'/'} className={styles.notFound__button}>
          Back to home page
        </Link>
      </div>
    </>
  );
};
