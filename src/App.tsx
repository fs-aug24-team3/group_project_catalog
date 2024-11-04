import React from 'react';
import './styles/main.scss';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <div className="container">
      <h1>TEAM 3!!! Welcome to Nice Gadgets store!</h1>
      <Outlet />
    </div>
  );
};
