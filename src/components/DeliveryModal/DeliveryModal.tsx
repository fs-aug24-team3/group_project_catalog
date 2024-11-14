/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import styles from './DeliveryModal.module.scss';

import deliveryGuyLight from './images/deliveryBright.png';
import deliveryGuyDark from './images/deliveryDark.png';

import closeIcon from '../../images/Icons/close.svg';
import closeIconDark from '../../images/Icons/close-dark.svg';
import truck from './images/truck.png';
import whiteTruck from './images/whiteTruck.png';
import tilda from './images/pngwing.com.png';
import done from './images/done.png';

import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface Props {
  hide: () => void;
  openSecondModal: () => void;
}

export const DeliveryModal: React.FC<Props> = ({ hide, openSecondModal }) => {
  const [countryValue, setCountryValue] = useState('');
  const [touchedCountry, setTouchedCountry] = useState(false);

  const [cityValue, setCityValue] = useState('');
  const [touchedCity, setTouchedCity] = useState(false);

  const [postValue, setPostValue] = useState('');
  const [touchedPost, setTouchedPost] = useState(false);

  const { t } = useTranslation();
  const [toShowAnimation, setToshowAnimation] = useState(false);

  const required = true;
  const hasErrorCountry = touchedCountry && required && !countryValue;
  const hasErrorCity = touchedCity && required && !cityValue;
  const hasErrorPost = touchedPost && required && !postValue;

  const submitButton = () => {
    if (countryValue && cityValue && postValue) {
      setToshowAnimation(true);

      setTimeout(() => {
        hide();
        openSecondModal();
      }, 3000);
    } else {
      if (!countryValue) {
        setTouchedCountry(true);
      }

      if (!cityValue) {
        setTouchedCity(true);
      }

      if (!postValue) {
        setTouchedPost(true);
      }
    }
  };

  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    setToshowAnimation(false);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div>
      <div className={styles.blur}></div>
      <dialog className={styles.modal}>
        <img src={tilda} alt="tilda" className={styles.tilda1} />
        <img src={tilda} alt="tilda" className={styles.tilda2} />
        <button className={styles.modal__close} onClick={hide}>
          <img
            className={styles.modal__closeImg}
            src={theme === 'light' ? closeIcon : closeIconDark}
            alt="cancel icon"
          />
        </button>

        <div className={styles.rowWrapper}>
          <div className={styles.formContainer}>
            <p className={styles.modal__title}>{t('delivery.title')}</p>

            <form>
              <div className={styles.field}>
                <label className={styles.label} htmlFor={'1'}>
                  {t('delivery.enter_country')}
                  <span style={{ color: 'red' }}> *</span>
                </label>

                <div className={styles.control}>
                  <input
                    className={`${styles.input} ${hasErrorCountry ? styles.error : ''}`}
                    type="search"
                    id="1"
                    placeholder={t('delivery.placeholder_country')}
                    value={countryValue}
                    onChange={event => setCountryValue(event.target.value)}
                    onBlur={() => setTouchedCountry(true)}
                    disabled={toShowAnimation}
                  />
                </div>

                {hasErrorCountry && (
                  <p className={styles.help}>
                    {t('delivery.required_country')}
                  </p>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="2">
                  {t('delivery.enter_city')}
                  <span style={{ color: 'red' }}> *</span>
                </label>

                <div className={styles.control}>
                  <input
                    className={`${styles.input} ${hasErrorCity ? styles.error : ''}`}
                    type="search"
                    id="2"
                    placeholder={t('delivery.placeholder_city')}
                    value={cityValue}
                    onChange={event => setCityValue(event.target.value)}
                    onBlur={() => setTouchedCity(true)}
                    disabled={toShowAnimation}
                  />
                </div>

                {hasErrorCity && (
                  <p className={styles.help}>{t('delivery.required_city')}</p>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="3">
                  {t('delivery.post_department')}
                  <span style={{ color: 'red' }}> *</span>
                </label>

                <div className={styles.control}>
                  <input
                    className={`${styles.input} ${hasErrorPost ? styles.error : ''}`}
                    type="search"
                    id="3"
                    placeholder={t('delivery.placeholder_post_department')}
                    value={postValue}
                    onChange={event => setPostValue(event.target.value)}
                    onBlur={() => setTouchedPost(true)}
                    disabled={toShowAnimation}
                  />
                </div>

                {hasErrorPost && (
                  <p className={styles.help}>
                    {t('delivery.required_post_department')}
                  </p>
                )}
              </div>
            </form>
          </div>

          <div className={styles.imgContainer}>
            <img
              className={styles.deliveryImg}
              src={theme === 'light' ? deliveryGuyLight : deliveryGuyDark}
              alt="delivery guy"
            />
          </div>
        </div>

        <div className={styles.animationContainer}>
          <div
            className={
              !toShowAnimation ? styles.iconContainer : styles.iconContainerAnim
            }
          >
            <img
              className={
                !toShowAnimation
                  ? styles.truckImage
                  : styles.truckImageAnimation
              }
              src={theme === 'light' ? truck : whiteTruck}
              alt="truck image"
            />
          </div>
          <div className={styles.truckRoad}></div>
        </div>

        {toShowAnimation ? (
          <div className={styles.doneContainer}>
            <img src={done} alt="done image" className={styles.doneImage} />
          </div>
        ) : (
          <button
            className={styles.paymentButton}
            onClick={submitButton}
            disabled={toShowAnimation}
          >
            {t('delivery.payment')}
          </button>
        )}
      </dialog>
    </div>
  );
};
