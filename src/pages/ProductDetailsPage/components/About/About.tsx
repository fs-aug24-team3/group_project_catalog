/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';

import { DetailedProduct } from '../../../../types/DetailedProduct';

import productStyles from '../../ProductDetailsPage.module.scss';
import styles from './About.module.scss';
import { useTranslation } from 'react-i18next';

interface Props {
  product: DetailedProduct;
}

export const About: FC<Props> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.about}>
      <h3 className={productStyles.details__subtitle}>
        {t('details.title.about')}
      </h3>

      {/* array */}
      <div className={styles.about__desc}>
        {product?.description.map((info, index) => {
          return (
            <div key={index} className={styles.about__wrap}>
              <h4 className={styles.about__title}>{t(info.title)}</h4>

              {info.text.map(text => {
                return (
                  <p key={text} className={styles.about__text}>
                    {t(text)}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
