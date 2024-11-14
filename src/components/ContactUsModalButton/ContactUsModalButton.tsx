/* eslint-disable import/no-extraneous-dependencies */
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../redux/slices/contactusSlice';

import styles from './ContactUsModalButton.module.scss';
import contactIcon from '../../images/Icons/phone-call.svg';
import contactIconDark from '../../images/Icons/phone-call-dark.svg';
import { useTranslation } from 'react-i18next';

export const ContactUsModalButton = () => {
  const { t } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <Link
      to="#"
      className={styles['contact-us__button']}
      onClick={() => dispatch(openModal())}
    >
      <img
        src={theme === 'light' ? contactIcon : contactIconDark}
        alt={t('contact_us.contact_us')}
      />
      {t('contact_us.contact_us')}
    </Link>
  );
};
