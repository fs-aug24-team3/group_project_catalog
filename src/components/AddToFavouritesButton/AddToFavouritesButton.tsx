import { FC, useEffect, useState } from 'react';
import styles from './AddToFavouritesButton.module.scss';
import { Link } from 'react-router-dom';
import { Product } from '../../types/Product';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import FavouritesIcon from '../../images/Icons/favourites.svg';
import FavouritesIconDark from '../../../src/images/Icons/favouritesDark.svg';
import FavouritesIconActive from '../../images/Icons/favourites-active.svg';
import { DeatailedProduct } from '../../types/DetailedProduct';

import FavouritesIcon from '../../images/Icons/favourites.svg';
import FavouritesIconActive from '../../images/Icons/favourites-active.svg';
import { DeatailedProduct } from '../../types/DetailedProduct';

type Props = {
  item: Product | DeatailedProduct;
  onRemoveFromFavourites?: (id: number | string) => void;
};

export const AddToFavouritesButton: FC<Props> = ({
  item,
  onRemoveFromFavourites,
}) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isFavourited, setIsFavourited] = useState(false);

  const event = new CustomEvent('onFavouriteUpdate');

  const handleFavourite = () => {
    const favourites: Product[] = JSON.parse(
      localStorage.getItem('favourites') || '[]',
    );
    let updatedFavourites;

    if (isFavourited) {
      updatedFavourites = favourites.filter(fav => fav.id !== item.id);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      document.dispatchEvent(event);

      if (onRemoveFromFavourites) {
        onRemoveFromFavourites(item.id);
      }
    } else {
      updatedFavourites = [...favourites, item];
    }

    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    document.dispatchEvent(event);

    setIsFavourited(!isFavourited);
  };

  useEffect(() => {
    const favourites: Product[] = JSON.parse(
      localStorage.getItem('favourites') || '[]',
    );

    setIsFavourited(favourites.some(fav => fav.id === item.id));
  }, [item.id]);

  return (
    <Link
      to="#favourite"
      className={styles['card__button--favourite']}
      onClick={handleFavourite}
    >
      <img
        src={
          isFavourited
            ? FavouritesIconActive
            : theme === 'light'
              ? FavouritesIcon
              : FavouritesIconDark
        }
        alt="favourites-icon"
      />
    </Link>
  );
};
