import React, { useEffect, useState } from 'react';
import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './ContactUsModal.module.scss';
import closeIcon from '../../images/Icons/close.svg';
import closeIconDark from '../../images/Icons/close-dark.svg';
import contactIcon from '../../images/Icons/phone-call.svg';
import contactIconDark from '../../images/Icons/phone-call-dark.svg';
import {
  openModal,
  resetRequest,
  sendRequest,
  setMobileNumber,
  setTimer,
} from '../../redux/slices/contactusSlice';

export const ContactUsModal: React.FC = () => {
  const dispatch = useDispatch();
  const { isModalOpen, mobileNumber, isRequestSent, timer, showTimer } =
    useSelector((state: RootState) => state.contactUs);
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
  };

  const escClose = (event: KeyboardEvent) =>
    event.code === 'Escape' && dispatch(resetRequest());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    dispatch(setMobileNumber(e.target.value));
  };

  const validateMobileNumber = (number: string) =>
    /^[0-9]{10,13}$/.test(number);

  const handleSendRequest = () => {
    if (validateMobileNumber(mobileNumber)) {
      localStorage.setItem('lastRequest', mobileNumber);
      dispatch(sendRequest());
    } else {
      setErrorMessage('*Please enter a valid mobile number.');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escClose);

    return () => document.removeEventListener('keydown', escClose);
  });

  useEffect(() => {
    const lastRequest = localStorage.getItem('lastRequest');

    if (lastRequest) {
      dispatch(sendRequest());
    }
  }, [dispatch]);

  useEffect(() => {
    let countdown: NodeJS.Timeout | null = null;

    if (isRequestSent && showTimer && timer > 0) {
      countdown = setInterval(() => {
        dispatch(setTimer(Math.max(timer - 10, 0)));
      }, 10);
    } else if (timer <= 0 && countdown) {
      clearInterval(countdown);
    }

    return () => {
      if (countdown) {
        clearInterval(countdown);
      }
    };
  }, [isRequestSent, showTimer, timer, dispatch]);

  return (
    <div>
      <Link
        to="#"
        className={styles['contact-us__button']}
        onClick={() => dispatch(openModal())}
      >
        <img
          src={theme === 'light' ? contactIcon : contactIconDark}
          alt="Contact Us"
        />
        Contact Us
      </Link>

      {isModalOpen && (
        <div className={styles.modal} onClick={() => dispatch(resetRequest())}>
          <div
            className={styles.modal__content}
            onClick={e => e.stopPropagation()}
          >
            <Link
              to="#"
              className={styles['modal__close-button']}
              onClick={() => dispatch(resetRequest())}
            >
              <img
                src={theme === 'light' ? closeIcon : closeIconDark}
                alt="Close"
              />
            </Link>

            {!isRequestSent ? (
              <>
                <h2 className={styles.modal__title}>
                  Enter your phone number and we&apos;ll call you back in 30
                  seconds
                </h2>

                <div className={styles['modal__send-request']}>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    value={mobileNumber}
                    onChange={handleInputChange}
                    className={styles['modal__send-request--input']}
                  />

                  <Link
                    to="#"
                    className={styles['modal__send-request--button']}
                    onClick={handleSendRequest}
                  >
                    Send Request
                  </Link>
                </div>

                <span className={styles['modal__send-request--example']}>
                  Example: 067 000 00 00
                </span>

                {errorMessage && (
                  <span
                    className={styles['modal__send-request--error-message']}
                  >
                    {errorMessage}
                  </span>
                )}

                <div className={styles.modal__status}>
                  <span className={styles['modal__status--available']}>
                    Available operators online: 1
                  </span>

                  <span className={styles['modal__status--orders']}>
                    Call orders today: 5+
                  </span>
                </div>
              </>
            ) : (
              <>
                {isRequestSent && showTimer && timer > 0 ? (
                  <div className={styles['modal__send-request--timer']}>
                    {formatTime(timer)}
                  </div>
                ) : (
                  <>
                    <span
                      className={styles['modal__send-request--timer-message']}
                    >
                      We&apos;ll call you as soon as possible
                    </span>

                    <Link
                      to="#"
                      className={styles['modal__send-request--button']}
                      onClick={() => dispatch(resetRequest())}
                    >
                      Close
                    </Link>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
