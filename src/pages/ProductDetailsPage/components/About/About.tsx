import { FC } from 'react';

import productStyles from '../../ProductDetailsPage.module.scss';
import styles from './About.module.scss';
import { DeatailedProduct } from '../../../../types/DetailedProduct';

interface Props {
  product: DeatailedProduct;
}

export const About: FC<Props> = ({ product }) => {
  return (
    <div className={styles.about}>
      <h3 className={productStyles.details__subtitle}>About</h3>

      {/* array */}
      <div className={styles.about__desc}>
        {product?.description.map((info, index) => (
          <div key={index} className={styles.about__wrap}>
            <h4 className={styles.about__title}>{info.title}</h4>
            <p className={styles.about__text}>{info.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
