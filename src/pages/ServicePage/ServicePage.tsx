import { useState } from 'react';
import cn from 'classnames';
import { BreadCrumbs } from '../../components/BreadCrumbs';

import styles from './ServicePage.module.scss';
import Service from '../../images/service.webp';

export const ServicePage = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isOpenedModal, setOpenedModal] = useState(false);
  const [isOpenText, setIsOpenText] = useState<number[]>([]);

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
      title: 'Where is the service center located?',
      info: `Nice Gadgets service center is located in the center of Lviv at Kopernika 37.`,
    },
    {
      key: 2,
      title: ' What are the working hours of the Apple Room service center?',
      info: 'We are open every day from 10:00 to 21:00.',
    },
    {
      key: 3,
      title: ' How much does diagnostics cost?',
      info: 'Diagnostics is free for our clients',
    },
    {
      key: 4,
      title: ' What devices do you specialize in repairing?',
      info: `We specialize in repairing all kinds of devices — nothing is too challenging for us!`,
    },
  ];

  return (
    <div>
      <div>
        <BreadCrumbs title="Service" />
      </div>

      <div className={styles['consultation-block']}>
        <p className={styles['consultation-block__title']}>
          Repair of Nice Gadgets equipment
          <br /> fast and hassle-free
        </p>

        <div>
          <div className={styles['consultation-block__form']}>
            <input
              type="tel"
              className={styles['consultation-block__phone-input']}
              // placeholder="+XXX (XX) XXX XX XX"
              placeholder="Enter you phone number"
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
              Get a consultation
            </button>
          </div>

          <p className={styles['consultation-block__text']}>
            Example: 067 000 00 00
          </p>

          {error && !isOpenedModal && (
            <p className={styles['consultation-block__error']}>{error}</p>
          )}
        </div>

        {isOpenedModal && (
          <div className={styles.modal} onClick={() => setOpenedModal(false)}>
            <div className={styles.modal__content}>
              <p className={styles.modal__message}>
                Your consultation request has been sent! Wait for a call back
              </p>
              <button
                onClick={() => setOpenedModal(false)}
                className={styles.modal__close}
              >
                Close
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
                  Safety and Reliability
                </h2>
                <p className={styles['service-text']}>
                  At our service centers, we prioritize the safety and security
                  of your devices. We understand the importance of your gadgets
                  in daily life, which is why we ensure that every repair is
                  performed with the utmost care. Our technicians use only
                  high-quality, certified replacement parts, ensuring the
                  longevity and reliability of your device. Plus, our secure
                  data handling practices guarantee that your personal
                  information remains protected throughout the repair process.
                </p>
              </div>
            </div>
          </section>
          <section className={styles['service-block']}>
            <div className={styles['service-content']}>
              <h2>What to Do in Case of a Breakdown</h2>
              <p className={styles['service-text']}>
                If your device breaks down or stops working, don’t panic! Our
                service centers are here to help. First, make sure your device
                is powered off and try to assess the issue. Then, bring it to
                our service center where our trained professionals will diagnose
                the problem. Whether it is a hardware issue or software
                malfunction, we’ll provide a thorough inspection and give you a
                detailed estimate of the repair costs.
              </p>
            </div>
          </section>
          <section className={styles['service-block']}>
            <div className={styles['service-content']}>
              <div>
                <h2 className={styles['service-title']}>
                  How Repair Pricing and Time are Determined
                </h2>
                <p className={styles['service-text']}>
                  We believe in full transparency when it comes to pricing. The
                  cost of repairs is based on the type of damage, the parts
                  required, and the time needed to complete the work. After an
                  initial inspection, we will provide you with an accurate quote
                  and estimated repair time. Our goal is to offer efficient
                  services without compromising on quality, so you can enjoy a
                  fast, affordable, and reliable solution for your device...
                </p>
              </div>
            </div>
          </section>
          <section className={styles['service-block']}>
            <div className={styles['service-content']}>
              <h2 className={styles['service-title']}>
                Advantages of Our Services
              </h2>
              <p className={styles['service-text']}>
                Choosing our service center means choosing peace of mind. We
                offer fast turnaround times, high-quality repairs, and a
                customer-centric approach that puts your needs first. Our
                professional team is always ready to help with any problem, big
                or small. Whether it’s a simple screen repair or a more complex
                issue, you can trust us to get the job done right the first
                time.
              </p>
            </div>
          </section>
          <section className={styles['service-block']}>
            <div className={styles['service-content']}>
              <h2 className={styles['service-title']}>
                Benefits of Our Service
              </h2>
              <p className={styles['service-text']}>
                When you choose our service center, you’re investing in the
                long-term health of your device. Our expert technicians not only
                fix the immediate issue but also ensure your device is optimized
                for better performance. We offer services such as software
                updates, system checks, and cleaning to help prolong the life of
                your gadget, giving you better value and reliability over time.
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
              <p className={styles['block_questions-title']}>{title}</p>
              <button
                onClick={() => handleOpenText(key)}
                className={cn(styles['block_questions-button'], {
                  [styles['is-open']]: isOpen,
                })}
              >
                {isOpen ? '-' : '+'}
              </button>

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
