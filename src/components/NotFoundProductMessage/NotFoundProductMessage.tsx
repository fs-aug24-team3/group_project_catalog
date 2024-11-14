/* eslint-disable import/no-extraneous-dependencies */
import styles from './NotFoundProductMessage.module.scss';
import { FC } from 'react';

import emptyFavouritesPng from '../../../public/img/product-not-found.png';
import emptyFvrtsPngDark from '../../../public/img/product-not-found-dark.png';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface Props {
  title: string;
  noFilterTitle?: string;
}

export const NotFoundProductMessage: FC<Props> = ({
  title,
  noFilterTitle = '',
}) => {
  const { t } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={styles.box}>
      {noFilterTitle ? (
        <p className={styles.messageFilter}>
          {t('no_items.no_items_with_criterias', {
            title: t(`no_items.${title.replace('pageTitle.', '')}`),
          })}
        </p>
      ) : (
        <p className={styles.message}>
          {t('no_items.no_items_yet', {
            title: t(`no_items.${title.replace('pageTitle.', '')}`),
          })}
        </p>
      )}

      <img
        src={theme === 'light' ? emptyFavouritesPng : emptyFvrtsPngDark}
        alt="not found message"
        className={styles.image}
      />
    </div>
  );
};
