import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Actions.module.scss';

import classNames from 'classnames';
import favouritesIcon from '../../../../images/Icons/favourites.svg';
import favouritesIconDark from '../../../../images/Icons/favouritesDark.svg';
import cartIcon from '../../../../images/Icons/cart.svg';
import cartIconDark from '../../../../images/Icons/cartDark.svg';
import loginIcon from '../../../../images/Icons/login.svg';
import logoutIcon from '../../../../images/Icons/logout.svg';
import loginIconDark from '../../../../images/Icons/loginDark.svg';
import logoutIconDark from '../../../../images/Icons/logoutDark.svg';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

import { useEffect, useState } from 'react';
import { Product } from '../../../../types/Product';
import { logout } from '../../../../redux/slices/authSlice';

interface Props {
  className?: string;
  onHideMenu?: () => void;
}

export const Actions: React.FC<Props> = ({ className, onHideMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.cartItems);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isLoading, setIsLoading] = useState(true)
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const count = items.length;

  const [favorites, setFavorites] = useState<Product[]>([]);

  const onFavouriteUpdate = () => {
    const savedFavorites = JSON.parse(
      localStorage.getItem('favourites') || '[]',
    );

    setFavorites(savedFavorites);
  };

  const handleAuthClick = () => {
    if (onHideMenu) {
      onHideMenu();
    }

    if (isLoggedIn) {
      dispatch(logout());
    } else {
      navigate('/login');
    }
  };

  useEffect(() => {
    onFavouriteUpdate();
    document.addEventListener('onFavouriteUpdate', onFavouriteUpdate);

    return () => {
      document.removeEventListener('onFavouriteUpdate', onFavouriteUpdate);
    };
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
          <img
            className={styles.logo}
            src={theme === 'light' ? favouritesIcon : favouritesIconDark}
            alt="favourites"
          />
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
        <img
          className={styles.logo}
          src={theme === 'light' ? cartIcon : cartIconDark}
          alt="cart"
        ></img>
      </NavLink>
      <button className={styles.actions__action} onClick={handleAuthClick}>
        {isLoggedIn ? (
          <img
            className={styles.logo}
            src={theme === 'light' ? logoutIcon : logoutIconDark}
            alt="logout icon"
          ></img>
        ) : (
          <img
            className={styles.logo}
            src={theme === 'light' ? loginIcon : loginIconDark}
            alt="login icon"
          ></img>
        )}
      </button>
    </div>
  );
};
