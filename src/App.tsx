import React from 'react';
import './styles/main.scss';
import { Outlet } from 'react-router-dom';
import styles from './styles/App.module.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactUsModal } from './components/ContactUsModal';

export const App: React.FC = () => {
  return (
    <div id="page-top" className={styles.page}>
      <Header />
      <main className={styles.container}>
        <div className={styles.outletWrapper}>
          <Outlet />
        </div>
        <ContactUsModal />
      </main>
      <Footer />
    </div>
  );
};
