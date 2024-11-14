/* eslint-disable import/no-extraneous-dependencies */
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from '@vis.gl/react-google-maps';
import styles from './ContactsPage.module.scss';

import Icon_map from '../../images/contacts/icons/icon-map.svg';
import Icon_clock from '../../images/contacts/icons/icon-clock.svg';
import Icon_email from '../../images/contacts/icons/icon-email.svg';
import Icon_call_number from '../../images/contacts/icons/icon-call-number.svg';

import Store from '../../images/contacts/store.jpeg';

const position = {
  lat: 49.841647584938535,
  lng: 24.028825942164726,
};

type Position = {
  key: string;
  location: google.maps.LatLngLiteral;
  type: string;
};

const contacts = [
  '+380 12 345 67 89',
  '+380 12 345 68 89',
  '+380 12 345 69 89',
];

const locations: Position[] = [
  {
    key: 'Doroshenko Street, 25',
    location: { lat: 49.83897101245205, lng: 24.02548211534162 },
    type: 'Shop, Lviv',
  },
  {
    key: 'Victoria Gardens',
    location: { lat: 49.80755080366501, lng: 23.978285998363294 },
    type: 'Shopping Center, Lviv',
  },
  {
    key: 'Spartak',
    location: { lat: 49.87075694206528, lng: 24.022712259569186 },
    type: 'Shopping Center, Lviv',
  },
  {
    key: 'KingCross Leopolis',
    location: { lat: 49.77396237815272, lng: 24.00992348805085 },
    type: 'Shopping Center, Lviv',
  },
];

const generateMapLink = (lat: number, lng: number) => {
  return `https://www.google.com/maps?q=${lat},${lng}`;
};

import { BreadCrumbs } from '../../components/BreadCrumbs';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const ContactsPage = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__top}>
        <BreadCrumbs title={'pageTitle.contacts'} />
      </div>

      <h1 className={styles['contacts__main-title']}>
        {t('pageTitle.contacts')}
      </h1>

      <div className={styles['contacts__block-contacts']}>
        <div className={styles.contacts__store}>
          <div className={styles['contacts__store-text']}>
            <div className={styles['contacts__contact-item']}>
              <h2 className={styles.contacts__title}>
                {t('contacts_page.contact_us')}
              </h2>
              <div className={styles.contacts_list}>
                {contacts.map(contact => (
                  <span className={styles.contacts__row} key={contact}>
                    <img
                      src={Icon_call_number}
                      alt="Icon-call-number"
                      className={styles['contacts__row-icon']}
                    />
                    <a
                      href={`tel:${contact.replace(' ', '')}`}
                      className={styles['contacts__row-contact']}
                    >
                      {contact}
                    </a>
                  </span>
                ))}
              </div>
            </div>
            <div className={styles['contacts__contact-item']}>
              <h2 className={styles.contacts__title}>
                {t('contacts_page.email')}
              </h2>
              <span className={styles.contacts__row}>
                <img
                  src={Icon_email}
                  alt="Icon_email"
                  className={styles['contacts__row-icon']}
                />
                <a
                  href="mailto:hello@miami.com"
                  className={styles['contacts__row-contact']}
                >
                  support@nicegadgets.com
                </a>
              </span>
            </div>
            <div className={styles['contacts__contact-item']}>
              <h2 className={styles.contacts__title}>
                {t('contacts_page.schedule')}
              </h2>
              <span className={styles.contacts__row}>
                <img
                  src={Icon_clock}
                  alt="Icon_clock"
                  className={styles['contacts__row-icon']}
                />
                {`${t('contacts_page.days')} : 9:00 AM - 9:00 PM`}
              </span>
            </div>
          </div>

          <img
            src={Store}
            alt="Store"
            className={styles['contacts__store-img']}
          />
        </div>

        <div className={styles['contacts__contact-item']}>
          <h2 className={styles.contacts__title}>
            {t('contacts_page.locations')}
          </h2>

          <div className={styles['contacts__store-item']}>
            {locations.map((location: Position) => (
              <a
                key={location.location.lat}
                href={generateMapLink(
                  location.location.lat,
                  location.location.lng,
                )}
                target="_blank"
                className={styles['contacts__row-contact']}
                rel="noreferrer"
              >
                <span className={styles.contacts__row}>
                  <img
                    src={Icon_map}
                    alt="Icon-map"
                    className={styles['contacts__row-icon']}
                  />
                  <p className={styles['contacts__store-name']}>
                    {`${location.key}, `}
                    <span className={styles['contacts__store-description']}>
                      {location.type}
                    </span>
                  </p>
                </span>
              </a>
            ))}
          </div>
        </div>

        <h2 className={styles.contacts__title}>
          {t('contacts_page.locations_on_map')}
        </h2>
        <div className={styles['contacts__store-map']}>
          <APIProvider
            apiKey={'AIzaSyBJGJ18Oc2UEljLBZF_YFdT20q1fi7LIxA'}
            // language={'en'}
            language={i18n.language === 'en' ? 'en' : 'ua'}
            // region={'EN'}
            region={i18n.language === 'en' ? 'EN' : 'UA'}
          >
            <div className={styles['contacts__map-container']}>
              <Map
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                defaultZoom={11}
                defaultCenter={position}
                gestureHandling={'greedy'}
                mapId={'3ecc4d44510af6c1'}
              ></Map>

              {locations.map((location: Position) => (
                <AdvancedMarker position={location.location} key={location.key}>
                  <Pin
                    background={'#4219D0'}
                    glyphColor={'#ffffff'}
                    borderColor={'#ffffff'}
                  />
                </AdvancedMarker>
              ))}
            </div>
          </APIProvider>
        </div>
      </div>
    </div>
  );
};
