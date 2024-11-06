import classNames from 'classnames';
import { Actions } from '../Actions/Actions';
import { Navigation } from '../Navigation/Navigation';
import styles from './Menu.module.scss';

interface Props {
  isOpen: boolean;
  onHideMenu: () => void;
}

export const Menu: React.FC<Props> = ({ isOpen, onHideMenu }) => {
  return (
    <aside
      className={classNames(styles.Menu, { [styles['Menu--is-open']]: isOpen })}
    >
      <Navigation className={styles.Menu__navigation} onHideMenu={onHideMenu} />
      <Actions className={styles.Menu__actions} onHideMenu={onHideMenu} />
    </aside>
  );
};
