import React from 'react';
import { Slider } from '../Slider/Slider';
import { SearchFilter } from '../SearchFilter/SearchFilter';
import { Modal } from '../Modal/Modal';
import { Form } from '../Form/Form';

export const Home = () => {
  return (
    <div className="container">
      <h1 className="title">UI elements</h1>
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
