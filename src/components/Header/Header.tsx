import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Navbar />
      </div>
    </header>
  );
}
