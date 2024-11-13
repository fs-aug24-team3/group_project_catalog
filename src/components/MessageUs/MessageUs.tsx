import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './MessageUs.module.scss';
import messageIcon from '../../images/Icons/message-us.svg';
import messageIconDark from '../../images/Icons/message-us-dark.svg';

export const MessageUs: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [isFormVisible, setIsFormVisible] = useState(false);

  const validatePhone = (number: string) => /^[0-9]{10,13}$/.test(number);

  const escClose = (event: KeyboardEvent) =>
    event.code === 'Escape' &&
    isFormVisible &&
    setIsFormVisible(prevVisible => !prevVisible);

  const handleSubmit = () => {
    setError('');
    setSuccessMessage('');

    if (!validatePhone(phone)) {
      setError('Wrong phone number input');

      return;
    }

    if (!message || message.length < 10) {
      setError("You haven't written anything or the message is too short");

      return;
    }

    setSuccessMessage('Message sent');
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(prevVisible => !prevVisible);
  };

  useEffect(() => {
    document.addEventListener('keydown', escClose);

    return () => document.removeEventListener('keydown', escClose);
  });

  return (
    <form className={styles['pop-up']}>
      <Link
        to="#"
        onClick={toggleFormVisibility}
        className={styles['pop-up__button']}
      >
        <img
          src={theme === 'light' ? messageIcon : messageIconDark}
          alt="Contact Us"
        />
        Message Us
      </Link>

      {isFormVisible && (
        <div className={styles['message-us']}>
          <div className={styles['message-us__content']}>
            <span className={styles['message-us__title']}>
              Write us a message
            </span>
            <div className={styles['message-us__input-container']}>
              <input
                type="text"
                className={`${styles['message-us__input-container']} ${styles.textfields}`}
                placeholder="Name"
              />
              <input
                type="tel"
                className={`${styles['message-us__input-container--phone']}
                  ${error && !validatePhone(phone) ? styles['input-error'] : ''}
                  ${styles.textfields}`}
                placeholder="*Phone Number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <input
                type="email"
                className={`${styles['message-us__input-container']} ${styles.textfields}`}
                placeholder="E-mail"
              />

              <textarea
                className={`${styles['message-us__input-container--message']}
                  ${error && (!message || message.length < 10) ? styles['input-error'] : ''}
                  ${styles.textfields}
                  ${styles['message-field']}`}
                placeholder="Message"
                value={message}
                rows={3}
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            {error && (
              <p className={styles['message-us__error-message']}>{error}</p>
            )}
            {successMessage && (
              <p className={styles['message-us__success-message']}>
                {successMessage}
              </p>
            )}

            <Link
              to="#"
              onClick={handleSubmit}
              className={styles['message-us__button']}
            >
              Send Message
            </Link>
          </div>
        </div>
      )}
    </form>
  );
};
