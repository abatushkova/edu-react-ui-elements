import React, { useState, useEffect } from 'react';
import { Slider } from '../Slider/Slider';
import { SearchFilter } from '../SearchFilter/SearchFilter';
import { Modal } from '../Modal/Modal';
import { Form } from '../Form/Form';
import { getTheme } from '../../utils/helpers/getTheme';
import './Home.scss';

export const Home = () => {
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark')
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="container">
      <div className="theme">
        <h1 className="title">UI elements</h1>
        <button
          type="button"
          className="theme__toggler"
          onClick={toggleTheme}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
      </div>
      <h2 className="subtitle">Slider</h2>
      <Slider />
      <h2 className="subtitle">Modal window</h2>
      <Modal />
      <h2 className="subtitle">Registration form</h2>
      <Form />
      <h2 className="subtitle">Search filter</h2>
      <SearchFilter />
    </div>
  );
}
