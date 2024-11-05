import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import classNames from 'classnames';

const NavData = [
  { title: 'Home', path: '/' },
  { title: 'Phones', path: '/phones' },
  { title: 'Tablets', path: '/tablets' },
  { title: 'Accessories', path: '/accessories' },
];

interface Props {
  className?: string;
  onHideMenu?: () => void;
}

export const Navigation: React.FC<Props> = ({ className, onHideMenu }) => {
  return (
    <ul className={`${styles.navigation__list} ${className}`}>
      {NavData.map(({ title, path }) => (
        <li className={styles.navigation__item} key={title}>
          <NavLink
            className={({ isActive }) =>
              classNames(styles.navigation__link, {
                [styles['navigation__link--active']]: isActive,
              })
            }
            to={path}
            onClick={onHideMenu}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
