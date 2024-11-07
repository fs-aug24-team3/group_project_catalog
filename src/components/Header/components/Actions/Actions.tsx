import { NavLink } from 'react-router-dom';
import styles from './Actions.module.scss';

import classNames from 'classnames';
import favourites from '../../../../images/Icons/favourites.svg';
import cart from '../../../../images/Icons/cart.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

interface Props {
  className?: string;
  onHideMenu?: () => void;
}

export const Actions: React.FC<Props> = ({ className, onHideMenu }) => {
  const items = useSelector((state: RootState) => state.cart.cartItems);
  const count = items.length;

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
