/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import imageNotFound from '../../images/notFoundImage/page-not-found.png';
// eslint-disable-next-line max-len
import imageNotFoundDark from '../../images/notFoundImage/page-not-found-dark.png';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';

export const NotFoundPage: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.notFound}>
        <img
          src={theme === 'light' ? imageNotFound : imageNotFoundDark}
          alt="image of not found page"
          className={styles.notFound__image}
        />
        <h2 className={styles.notFound__title}>{t('page.page_not_found')}</h2>
        <Link to={'/'} className={styles.notFound__button}>
          {t('page.back_to_home')}
        </Link>
      </div>
    </>
  );
};
