import { NavLink } from 'react-router-dom';
import styles from './Actions.module.scss';

import classNames from 'classnames';
import favourites from '../../../../images/Icons/favourites.svg';
import cart from '../../../../images/Icons/cart.svg';
import { useEffect, useState } from 'react';
import { Product } from '../../../../types/Product';

interface Props {
  className?: string;
  onHideMenu?: () => void;
}

export const Actions: React.FC<Props> = ({ className, onHideMenu }) => {
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
        <img className={styles.logo} src={favourites} alt="favourites" />
        <p className={styles.bubble}>{favorites.length}</p>
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
        <img className={styles.logo} src={cart} alt="cart" />
      </NavLink>
    </div>
  );
};
