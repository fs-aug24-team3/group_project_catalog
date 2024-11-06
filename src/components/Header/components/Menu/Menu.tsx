import classNames from 'classnames';
import { Actions } from '../Actions/Actions';
import { Navigation } from '../Navigation/Navigation';
import styles from './Menu.module.scss';

interface Props {
  isOpen: boolean;
}

export const Menu: React.FC<Props> = ({ isOpen }) => {
  return (
    <aside
      className={classNames(styles.Menu, { [styles['Menu--is-open']]: isOpen })}
    >
      <Navigation className={styles.Menu__navigation} />
      <Actions className={styles.Menu__actions} />
    </aside>
  );
};
