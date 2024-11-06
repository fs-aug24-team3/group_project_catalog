import Icon_map from '../../images/contacts/icons/icon-map.svg';
import Icon_call from '../../images/contacts/icons/icon-call.svg';
import Icon_clock from '../../images/contacts/icons/icon-clock.svg';
import Icon_email from '../../images/contacts/icons/icon-email.svg';
import Icon_home from '../../images/contacts/icons/icon-home.svg';

import Map from '../../images/contacts/media/map.png';

// TO DO -Перевірити картинки

import styles from './ContactsPage.module.scss';
import { Link } from 'react-router-dom';
export const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <div>Contacts Page</div>

      <div className={styles.contacts__icon}>
        <img
          src={Icon_map}
          alt="Icon-map"
          className={styles['contacts__icon-element']}
        />
        <img
          src={Icon_call}
          alt="Icon_call"
          className={styles['contacts__icon-element']}
        />
        <img
          src={Icon_clock}
          alt="Icon_clock"
          className={styles['contacts__icon-element']}
        />
        <img
          src={Icon_email}
          alt="Icon_email"
          className={styles['contacts__icon-element']}
        />
      </div>

      <div className={styles['contacts__about-us']}></div>

      <div className={styles.contacts__top}>
        <Link to={'/'}>
          <img
            src={Icon_home}
            alt="Icon_home"
            className={styles['contacts__top-ikon']}
          />
        </Link>
        {/* <img
            src={Icon_chevron}
            alt="Icon_chevron"
            className={styles['contacts__information-ikon']}
          /> */}
        <span>/ Contacts</span>
      </div>

      <div className={styles.contacts__information}>
        <h2>Online store Nice Gadjets</h2>
        <img src={Map} alt="Map" className={styles.map} />
        {/*TO DO classss */}
        <div className={styles['contscts__information-map']}></div>
      </div>
    </div>
  );
};
