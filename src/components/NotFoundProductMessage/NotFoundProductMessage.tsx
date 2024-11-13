import styles from './NotFoundProductMessage.module.scss';
import { FC } from 'react';

import emptyFavouritesPng from '../../../public/img/product-not-found.png';
import emptyFvrtsPngDark from '../../../public/img/product-not-found-dark.png';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

interface Props {
  title: string;
  noFilterTitle?: string;
}

export const NotFoundProductMessage: FC<Props> = ({
  title,
  noFilterTitle = '',
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={styles.box}>
      {noFilterTitle ? (
        <p className={styles.messageFilter}>
          {`There are no ${title.toLowerCase()} corresponding your serch criterias`}
        </p>
      ) : (
        <p className={styles.message}>
          {`There are no ${title.toLowerCase()} yet `}
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
