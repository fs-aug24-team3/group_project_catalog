/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux';
import errorImage from '../../images/product-not-found.png';
import errorImageDark from '../../../public/img/product-not-found-dark.png';

import styles from './ErrorBlock.module.scss';
import { FC } from 'react';
import { RootState } from '../../redux/store';
import { useTranslation } from 'react-i18next';

interface Props {
  errorMessage: string;
  reload: () => void;
}

export const ErrorBlock: FC<Props> = ({ errorMessage, reload }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { t } = useTranslation();

  return (
    <div className={styles.error}>
      <img
        src={theme === 'light' ? errorImage : errorImageDark}
        alt="error image"
        className={styles.error__image}
      />
      <p className={styles.error__text}>{errorMessage}</p>
      <button type="button" className={styles.error__button} onClick={reload}>
        {t('page.error')}
      </button>
    </div>
  );
};
