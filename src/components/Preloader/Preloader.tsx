import React from 'react';
import './Preloader.scss';

export const Preloader = () => {
  return (
    <div className="preloader-overlay" aria-hidden="true">
      <div className="preloader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
