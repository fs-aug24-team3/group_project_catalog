/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './MessageUsButton.module.scss';
import messageIcon from '../../images/Icons/message-us.svg';
import messageIconDark from '../../images/Icons/message-us-dark.svg';
import { useTranslation } from 'react-i18next';

type Props = {
  onFormVisibility: () => void;
};

export const MessageUsButton: FC<Props> = ({ onFormVisibility }) => {
  const { t } = useTranslation();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Link
      to="#"
      onClick={onFormVisibility}
      className={styles['pop-up__button']}
    >
      <img
        src={theme === 'light' ? messageIcon : messageIconDark}
        alt={t('message_us.button_message_us')}
      />
      {t('message_us.button_message_us')}
    </Link>
  );
};
