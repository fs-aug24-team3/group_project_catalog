import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { openModal } from '../../redux/slices/contactusSlice';
import styles from './ContactUsModalButton.module.scss';
import contactIcon from '../../images/Icons/phone-call.svg';
import contactIconDark from '../../images/Icons/phone-call-dark.svg';

export const ContactUsModalButton = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <Link
      to="#"
      className={`${styles['contact-us__button']} ${styles[theme]}`}
      onClick={() => dispatch(openModal())}
    >
      <img
        src={theme === 'light' ? contactIcon : contactIconDark}
        alt="Contact Us"
      />
      Contact Us
    </Link>
  );
};
