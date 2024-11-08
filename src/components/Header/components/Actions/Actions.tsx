import { NavLink } from 'react-router-dom';
import styles from './Actions.module.scss';

import classNames from 'classnames';
import favouritesIcon from '../../../../images/Icons/favourites.svg';
import cart from '../../../../images/Icons/cart.svg';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

import { useEffect, useState } from 'react';
import { Product } from '../../../../types/Product';

interface Props {
  className?: string;
  onHideMenu?: () => void;
}

export const Actions: React.FC<Props> = ({ className, onHideMenu }) => {
  const items = useSelector((state: RootState) => state.cart.cartItems);
  const count = items.length;

  const [favorites, setFavorites] = useState<Product[]>([]);

  const onFavouriteUpdate = () => {
    const savedFavorites = JSON.parse(
      localStorage.getItem('favourites') || '[]',
    );

    setFavorites(savedFavorites);
  };

  useEffect(() => {
    onFavouriteUpdate();
    document.addEventListener('onFavouriteUpdate', onFavouriteUpdate);
  }, []);

  return (
    <div className={`${styles.actions} ${className}`}>
      <NavLink
        to="/favourites"
        className={({ isActive }) =>
          classNames(styles.actions__action, {
            [styles['actions__action--active']]: isActive,
          })
        }
        onClick={onHideMenu}
      >
        {favorites.length > 0 && (
          <div className={styles.actions__counter}>{favorites.length}</div>
        )}
        {favorites && (
          <img className={styles.logo} src={favouritesIcon} alt="favourites" />
        )}
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          classNames(styles.actions__action, {
            [styles['actions__action--active']]: isActive,
          })
        }
        onClick={onHideMenu}
      >
        {count > 0 && <div className={styles.actions__counter}>{count}</div>}
        <img className={styles.logo} src={cart} alt="cart"></img>
      </NavLink>
    </div>
  );
};
