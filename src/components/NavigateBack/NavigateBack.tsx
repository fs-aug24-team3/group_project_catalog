import React, { MouseEvent } from 'react';
import styles from './NavigateBack.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import arrowLeft from '../../images/Icons/arrow_left.svg';

interface Props {
  className?: string;
}

export const BackLink: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  const onClickHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <Link
      to={''}
      className={classNames(styles['back-link'], className)}
      onClick={onClickHandler}
    >
      <div className={styles['back-link__icon']}>
        <img src={arrowLeft} alt="back arrow" />
      </div>
      <p className={styles['back-link__text']}>Back</p>
    </Link>
  );
};
