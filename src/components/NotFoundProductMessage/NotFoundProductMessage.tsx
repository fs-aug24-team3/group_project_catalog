import styles from './NotFoundProductMessage.module.scss';
import notFoundProduct from '../../images/product-not-found.png';
import { FC } from 'react';

interface Props {
  title: string;
}

export const NotFoundProductMessage: FC<Props> = ({ title }) => (
  <div className={styles.box}>
    <p className={styles.message}>
      {`There are no ${title.toLowerCase()} yet `}
    </p>

    <img
      src={notFoundProduct}
      alt="not found message"
      className={styles.image}
    />
  </div>
);
