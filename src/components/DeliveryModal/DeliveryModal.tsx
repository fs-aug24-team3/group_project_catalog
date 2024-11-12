import React, { useState, useEffect } from 'react';
import styles from './DeliveryModal.module.scss';

import deliveryGuy from './images/deliveryBright.png';

export const DeliveryModal: React.FC = () => {
  const [countryValue, setCountryValue] = useState('');
  const [touchedCountry, setTouchedCountry] = useState(false);

  const [cityValue, setCityValue] = useState('');
  const [touchedCity, setTouchedCity] = useState(false);

  const [postValue, setPostValue] = useState('');
  const [touchedPost, setTouchedPost] = useState(false);

  const required = true;
  const hasErrorCountry = touchedCountry && required && !countryValue;
  const hasErrorCity = touchedCity && required && !cityValue;
  const hasErrorPost = touchedPost && required && !postValue;

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div>
      <div className={styles.blur}></div>
      <dialog className={styles.modal}>
        <div className={styles.rowWrapper}>
          <div className={styles.formContainer}>
            <p className={styles.modal__title}>Delivery</p>

            <form>
              <div className={styles.field}>
                <label className={styles.label} htmlFor={'1'}>
                  Enter your country
                  <span style={{ color: 'red' }}> *</span>
                </label>

                <div className={styles.control}>
                  <input
                    className={`${styles.input} ${hasErrorCountry ? styles.error : ''}`}
                    type="search"
                    id="1"
                    placeholder="Country to deliver"
                    value={countryValue}
                    onChange={event => setCountryValue(event.target.value)}
                    onBlur={() => setTouchedCountry(true)}
                  />
                </div>

                {hasErrorCountry && (
                  <p className={styles.help}>Country is required</p>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="2">
                  Enter your city
                  <span style={{ color: 'red' }}> *</span>
                </label>

                <div className={styles.control}>
                  <input
                    className={`${styles.input} ${hasErrorCity ? styles.error : ''}`}
                    type="search"
                    id="2"
                    placeholder="City to deliver"
                    value={cityValue}
                    onChange={event => setCityValue(event.target.value)}
                    onBlur={() => setTouchedCity(true)}
                  />
                </div>

                {hasErrorCity && (
                  <p className={styles.help}>City is required</p>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="3">
                  Enter your post department
                  <span style={{ color: 'red' }}> *</span>
                </label>

                <div className={styles.control}>
                  <input
                    className={`${styles.input} ${hasErrorPost ? styles.error : ''}`}
                    type="search"
                    id="3"
                    placeholder="Post department"
                    value={postValue}
                    onChange={event => setPostValue(event.target.value)}
                    onBlur={() => setTouchedPost(true)}
                  />
                </div>

                {hasErrorPost && (
                  <p className={styles.help}>Post department is required</p>
                )}
              </div>
            </form>
          </div>

          <div className={styles.imgContainer}>
            <img
              className={styles.deliveryImg}
              src={deliveryGuy}
              alt="delivery guy"
            />
          </div>
        </div>
      </dialog>
    </div>
  );
};
