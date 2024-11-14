import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import styles from './MessageUsButton.module.scss';
import messageIcon from '../../images/Icons/message-us.svg';
import messageIconDark from '../../images/Icons/message-us-dark.svg';

type Props = {
  onFormVisibility: () => void;
};

export const MessageUsButton: FC<Props> = ({ onFormVisibility }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <Link
      to="#"
      onClick={onFormVisibility}
      className={`${styles['pop-up__button']} ${styles[theme]}`}
    >
      <img
        src={theme === 'light' ? messageIcon : messageIconDark}
        alt="Contact Us"
      />
      Message Us
    </Link>
  );
};
