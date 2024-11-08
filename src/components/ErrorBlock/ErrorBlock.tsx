import errorImage from '../../images/product-not-found.png';

import styles from './ErrorBlock.module.scss';
import { FC } from 'react';

interface Props {
  errorMessage: string;
  reload: () => void;
}

export const ErrorBlock: FC<Props> = ({ errorMessage, reload }) => {
  return (
    <div className={styles.error}>
      <img src={errorImage} alt="error image" className={styles.error__image} />
      <p className={styles.error__text}>{errorMessage}</p>
      <button type="button" className={styles.error__button} onClick={reload}>
        Try again
      </button>
    </div>
  );
};
