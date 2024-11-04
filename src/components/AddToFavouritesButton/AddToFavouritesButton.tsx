import { FC } from 'react';
import styles from './AddToFavouritesButton.module.scss';

type Props = {
  favourited: boolean;
  onFavourite: () => void;
};

export const AddToFavouritesButton: FC<Props> = ({
  favourited,
  onFavourite,
}) => {
  return (
    <a
      href="#favourite"
      className={styles['card__button--favourite']}
      onClick={() => {
        onFavourite();
      }}
    >
      <img
        src={
          favourited
            ? '../../../src/images/Icons/favourites-active.svg'
            : '../../../src/images/Icons/favourites.svg'
        }
        alt="favourites-icon"
      />
    </a>
  );
};
