/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import styles from './RightsPage.module.scss';
import { useTranslation } from 'react-i18next';

export const RightsPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return (
    <div className={styles.rights}>
      <BreadCrumbs title={'pageTitle.rights'} />
      <h1 className={styles['rights__main-title']}>{t('rights_page.title')}</h1>
      <h2 className={styles.rights__title}>{t('rights_page.title_privacy')}</h2>
      <p className={styles.rights__descriptions}>
        {t('rights_page.text_privacy')}
      </p>
      <h2 className={styles.rights__title}>
        {t('rights_page.title_intellectual_property')}
      </h2>
      <p className={styles.rights__descriptions}>
        {t('rights_page.text_intellectual_property')}
      </p>
      <h2 className={styles.rights__title}>
        {t('rights_page.title_warranty')}
      </h2>
      <p className={styles.rights__descriptions}>
        {t('rights_page.text_warranty')}
      </p>
      <h2 className={styles.rights__title}>
        {t('rights_page.title_fair_pricing')}
      </h2>
      <p className={styles.rights__descriptions}>
        {t('rights_page.text_fair_pricing')}
      </p>
      <h2 className={styles.rights__title}>
        {t('rights_page.title_customer_support')}
      </h2>
      <p className={styles.rights__descriptions}>
        {t('rights_page.text_customer_support')}
      </p>
    </div>
  );
};
