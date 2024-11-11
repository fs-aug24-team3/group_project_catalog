import React, { useEffect, useState } from 'react';
import styles from './ContactUsModal.module.scss';
import { Link } from 'react-router-dom';

import closeIcon from '../../images/Icons/close.svg';
import contactIcon from '../../images/Icons/phone-call.svg';

export const ContactUsModal: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isRequestSent, setRequestSent] = useState(false);
  const [timer, setTimer] = useState(30);
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    const lastRequest = localStorage.getItem('lastRequest');

    if (lastRequest) {
      setRequestSent(true);
    }
  }, []);

  useEffect(() => {
    let countdown: NodeJS.Timeout | null = null;

    if (isRequestSent && showTimer && timer > 0) {
      countdown = setInterval(() => {
        setTimer(prev => Math.max(prev - 10, 0));
      }, 10);
    } else if (timer <= 0 && countdown) {
      clearInterval(countdown);
    }

    return () => {
      if (countdown) {
        clearInterval(countdown);
      }
    };
  }, [isRequestSent, showTimer, timer]);

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    setShowTimer(!isRequestSent);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value);
  };

  const validateMobileNumber = (number: string) => {
    const mobileRegex = /^[0-9]{10,15}$/;

    return mobileRegex.test(number);
  };

  const handleSendRequest = () => {
    if (validateMobileNumber(mobileNumber)) {
      localStorage.setItem('lastRequest', mobileNumber);
      setRequestSent(true);
      setTimer(30000);
      setShowTimer(true);
    } else {
      alert('Please enter a valid mobile number.');
    }
  };

  const handleResetRequest = () => {
    setMobileNumber('');
    setRequestSent(false);
    setTimer(30000);
    setShowTimer(true);
  };

  return (
    <div>
      <Link
        to="#"
        className={styles['contact-us__button']}
        onClick={handleOpenModal}
      >
        <img src={contactIcon} alt="Contact Us" />
        Contact Us
      </Link>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modal__content}>
            <Link
              to="#"
              className={styles['modal__close-button']}
              onClick={handleCloseModal}
            >
              <img src={closeIcon} alt="Close" />
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
                {isRequestSent && showTimer && (
                  <div className={styles.timer}>{formatTime(timer)}</div>
                )}
                <Link
                  to="#"
                  className={styles['modal__send-request--button']}
                  onClick={handleResetRequest}
                >
                  Send One More Request
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
