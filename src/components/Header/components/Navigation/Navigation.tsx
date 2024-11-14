import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import classNames from 'classnames';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';

const NavData = [
  { title: 'links.home', path: '/' },
  { title: 'links.phones', path: '/phones' },
  { title: 'links.tablets', path: '/tablets' },
  { title: 'links.accessories', path: '/accessories' },
];

interface Props {
  className?: string;
  onHideMenu?: () => void;
}

export const Navigation: React.FC<Props> = ({ className, onHideMenu }) => {
  const { t } = useTranslation();

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
            {t(`${title}`)}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
