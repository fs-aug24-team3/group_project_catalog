import React from 'react';
import './styles/main.scss';
import { Outlet } from 'react-router-dom';
import styles from './styles/App.module.scss';
import { Header } from './components/Header';

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};
