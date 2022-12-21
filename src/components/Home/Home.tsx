import React from 'react';
import { Slider } from '../Slider/Slider';
import './Home.scss';

export const Home = () => {
  return (
    <div className="container">
      <h1 className="title">UI elements</h1>
      <h2 className="subtitle">Image Slider</h2>
      <Slider />
      <h2 className="subtitle">Modal window</h2>
      <h2 className="subtitle">Search filter</h2>
    </div>
  );
}
