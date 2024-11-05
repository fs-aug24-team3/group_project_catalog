import { NavLink } from 'react-router-dom';
import styles from './Actions.module.scss';

import classNames from 'classnames';
import favourites from '../../../../images/Icons/favourites.svg';
import cart from '../../../../images/Icons/cart.svg';

export const Actions: React.FC = () => {
  return (
    <div className={styles.actions}>
      <NavLink
        className={({ isActive }) =>
          classNames(styles.actions__action, {
            [styles['actions__action--active']]: isActive,
          })
        }
        to="/favourites"
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
      >
        <img className={styles.logo} src={cart} alt="cart" />
      </NavLink>
    </div>
  );
};
