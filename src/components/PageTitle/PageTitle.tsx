import { FC } from 'react';

import styles from './PageTitle.module.scss';

interface Props {
  children: React.ReactNode;
}

export const PageTitle: FC<Props> = ({ children }) => (
  <h1 className={styles['page-title']}>{children}</h1>
);
