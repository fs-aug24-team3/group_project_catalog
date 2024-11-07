import classNames from 'classnames';
import { Actions } from '../Actions/Actions';
import { Navigation } from '../Navigation/Navigation';
import styles from './Menu.module.scss';
import { useEffect } from 'react';

interface Props {
  isOpen: boolean;
  onHideMenu: () => void;
}

export const Menu: React.FC<Props> = ({ isOpen, onHideMenu }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <aside
      className={classNames(styles.Menu, { [styles['Menu--is-open']]: isOpen })}
    >
      <Navigation className={styles.Menu__navigation} onHideMenu={onHideMenu} />
      <Actions className={styles.Menu__actions} onHideMenu={onHideMenu} />
    </aside>
  );
};
