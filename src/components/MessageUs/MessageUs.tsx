import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { MessageUsButton } from '../MessageUsButton/MessageUsButton';

import styles from './MessageUs.module.scss';
import closeIcon from '../../images/Icons/close.svg';
import closeIconDark from '../../images/Icons/close-dark.svg';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';

export const MessageUs: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const { t } = useTranslation();

  const validatePhone = (number: string) => /^[0-9]{10,13}$/.test(number);

  const escClose = (event: KeyboardEvent) =>
    event.code === 'Escape' &&
    isFormVisible &&
    setIsFormVisible(prevVisible => !prevVisible);

  const handleSubmit = () => {
    setError('');
    setSuccessMessage('');

    if (!validatePhone(phone)) {
      setError(t('message_us.error_wrong_phone'));

      return;
    }

    if (!message || message.length < 10) {
      setError(t('message_us.not_enought_letters'));

      return;
    }

    setSuccessMessage(t('message_us.success'));
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setIsFormVisible(prevVisible => !prevVisible);
    }, 7000);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(prevVisible => !prevVisible);
    setPhone('');
    setMessage('');
    setError('');
    setSuccessMessage('');
  };

  useEffect(() => {
    document.addEventListener('keydown', escClose);

    return () => document.removeEventListener('keydown', escClose);
  });

  return (
    <form className={styles['pop-up']}>
      <MessageUsButton onFormVisibility={toggleFormVisibility} />

      {isFormVisible && (
        <div
          className={`${styles['message-us']} ${showSuccess ? styles['fade-out'] : ''}`}
        >
          <div className={styles['message-us__content']}>
            {showSuccess ? (
              <p className={styles['message-us__success-message']}>
                {successMessage}
              </p>
            ) : (
              <>
                <Link
                  to="#"
                  className={styles['message-us__close-button']}
                  onClick={toggleFormVisibility}
                >
                  <img
                    src={theme === 'light' ? closeIcon : closeIconDark}
                    alt="Close"
                  />
                </Link>
                <span className={styles['message-us__title']}>
                  {t('message_us.title')}
                </span>

                <div className={styles['message-us__input-container']}>
                  <input
                    type="text"
                    className={`${styles['message-us__input-container']} ${styles.textfields}`}
                    placeholder={t('message_us.placeholder_name')}
                  />

                  <input
                    type="tel"
                    className={`${styles['message-us__input-container--phone']}
                      ${error && !validatePhone(phone) ? styles['input-error'] : ''}
                      ${styles.textfields}`}
                    placeholder={`* ${t('message_us.placeholder_number')}`}
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
                    placeholder={t('message_us.placeholder_message')}
                    value={message}
                    rows={3}
                    onChange={e => setMessage(e.target.value)}
                  />
                </div>

                {error && (
                  <p className={styles['message-us__error-message']}>{error}</p>
                )}

                <Link
                  to="#"
                  onClick={handleSubmit}
                  className={styles['message-us__button']}
                >
                  {t('message_us.send')}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </form>
  );
};
