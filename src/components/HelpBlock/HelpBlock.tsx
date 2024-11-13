import { ContactUsModal } from '../ContactUsModal';
import { MessageUs } from '../MessageUs';
import styles from './HelpBlock.module.scss';

export const HelpBlock = () => {
  return (
    <div className={styles['help-block']}>
      <ContactUsModal />
      <MessageUs />
    </div>
  );
};
