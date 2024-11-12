import { useState } from 'react';
import styles from './CheckPage.module.scss';
import { DeliveryModal } from '../components/DeliveryModal';

export const CheckPage = () => {
  const [showDelivery, setShowDelivery] = useState(false);

  return (
    <div>
      <button
        className={styles.buttonCheck}
        onClick={() => setShowDelivery(true)}
      >
        check modal button
      </button>

      {showDelivery && <DeliveryModal />}
    </div>
  );
};
