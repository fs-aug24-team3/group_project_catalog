import React from 'react';
import './styles/main.scss';
import { Outlet } from 'react-router-dom';
import styles from './styles/App.module.scss';
import { ProductCard } from './components/ProductCard';

export const App: React.FC = () => {
  return (
    <div className="container">
      <h1>TEAM 3!!! Welcome to Nice Gadgets store!</h1>
      <div className={styles.container}>
        <Outlet />
      </div>
      <ProductCard />
    </div>
  );
};
