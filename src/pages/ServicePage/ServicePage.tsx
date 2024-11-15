import { useEffect, useState } from 'react';
import cn from 'classnames';
import { BreadCrumbs } from '../../components/BreadCrumbs';

import styles from './ServicePage.module.scss';
import Service from '../../images/service.webp';
import { useTranslation } from 'react-i18next';

export const ServicePage = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isOpenedModal, setOpenedModal] = useState(false);
  const [isOpenText, setIsOpenText] = useState<number[]>([]);

  const { t } = useTranslation();

  const validateMobileNumber = (number: string) =>
    /^[0-9]{10,13}$/.test(number);

  const handleConsultation = () => {
    if (phone && validateMobileNumber(phone)) {
      setPhone('');
      setError('');
      setOpenedModal(true);
    } else if (!phone) {
      setError('*Please enter your phone number');
    } else {
      setError('*Invalid phone number. Please enter a valid number');
      setOpenedModal(false);
    }
  };

  const handleOpenText = (index: number) => {
    setIsOpenText(prevIndex => {
      if (prevIndex.includes(index)) {
        return prevIndex.filter(el => el !== index);
      } else {
        return [...prevIndex, index];
      }
    });
  };

  const text = [
    {
      key: 1,
      title: t('service_page.questions.title.located'),
      info: t('service_page.questions.info.located_info'),
    },
    {
      key: 2,
      title: t('service_page.questions.title.working_hours'),
      info: t('service_page.questions.info.working_hours_info'),
    },
    {
      key: 3,
      title: t('service_page.questions.title.diagnostics_cost'),
      info: t('service_page.questions.info.diagnostics_cost_info'),
    },
    {
      key: 4,
      title: t('service_page.questions.title.specialized_devices'),
      info: t('service_page.questions.info.specialized_devices_info'),
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div>
      <div>
        <BreadCrumbs title={'pageTitle.service'} />
      </div>

      <div className={styles['consultation-block']}>
        <p className={styles['consultation-block__title']}>
          {t('service_page.phone_input.title')}
        </p>

        <div>
          <div className={styles['consultation-block__form']}>
            <input
              type="tel"
              className={styles['consultation-block__phone-input']}
              placeholder={t('service_page.phone_input.enter_number')}
              value={phone}
              onChange={event => {
                setPhone(event.target.value);
              }}
              required
            />
            <button
              onClick={handleConsultation}
              className={styles['consultation-block__button']}
            >
              {t('service_page.phone_input.button_consultation')}
            </button>
          </div>

          <p className={styles['consultation-block__text']}>
            {t('service_page.phone_input.example')}: 067 000 00 00
          </p>

          {error && !isOpenedModal && (
            <p className={styles['consultation-block__error']}>{error}</p>
          )}
        </div>

        {isOpenedModal && (
          <div className={styles.modal} onClick={() => setOpenedModal(false)}>
            <div className={styles.modal__content}>
              <p className={styles.modal__message}>
                {t('service_page.phone_input.sended_request')}
              </p>
              <button
                onClick={() => setOpenedModal(false)}
                className={styles.modal__close}
              >
                {t('service_page.phone_input.close')}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.service}>
        <div className={styles.slider}>
          <section className={styles['service-block']}>
            <div className={styles['service-content']}>
              <div className={styles['service-content']}>
                <h2 className={styles['service-title']}>
                  {t('service_page.info.title.safety')}
                </h2>
                <p className={styles['service-text']}>
                  {t('service_page.info.text.safety_text')}
                </p>
              </div>
            </div>
          </section>
          <section className={styles['service-block']}>
            <div className={styles['service-content']}>
              <h2 className={styles['service-title']}>
                {t('service_page.info.title.breakdown_case')}
              </h2>
              <p className={styles['service-text']}>
                {t('service_page.info.text.breakdown_case_text')}
              </p>
            </div>
          </section>
          <section className={styles['service-block']}>
            <div className={styles['service-content']}>
              <div>
                <h2 className={styles['service-title']}>
                  {t('service_page.info.title.determinated')}
                </h2>
                <p className={styles['service-text']}>
                  {t('service_page.info.text.determinated_text')}
                </p>
              </div>
            </div>
          </section>
          <section className={styles['service-block']}>
            <div className={styles['service-content']}>
              <h2 className={styles['service-title']}>
                {t('service_page.info.title.advantages')}
              </h2>
              <p className={styles['service-text']}>
                {t('service_page.info.text.advantages_text')}
              </p>
            </div>
          </section>
          <section className={styles['service-block']}>
            <div className={styles['service-content']}>
              <h2 className={styles['service-title']}>
                {t('service_page.info.title.benefits')}
              </h2>
              <p className={styles['service-text']}>
                {t('service_page.info.text.benefits_text')}
              </p>
            </div>
          </section>
        </div>

        <div className={styles['service-image-wrapper']}>
          <img
            src={Service}
            alt="Service"
            className={styles['service-image']}
          />
        </div>
      </div>

      <div className={styles.block_questions}>
        {text.map(element => {
          const { key, title, info } = element;
          const isOpen = isOpenText.includes(key);

          return (
            <div
              key={key}
              className={cn(styles['block_questions-element'], {
                [styles['is-open']]: isOpen,
              })}
            >
              <div className={styles['block_questions-main']}>
                <p className={styles['block_questions-title']}>{title}</p>
                <button
                  onClick={() => handleOpenText(key)}
                  className={styles['block_questions-button']}
                >
                  {isOpen ? '-' : '+'}
                </button>
              </div>

              <p
                className={cn(styles['block_questions-text'], {
                  [styles['is-open']]: isOpen,
                })}
              >
                {info}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
