import React, { useContext } from 'react';
import { SliderContext } from '../../context/SliderContext';
import './Arrows.scss';

export const Arrows = () => {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows">
      <button type="button" className="arrows__item arrows__item--prev" onClick={() => changeSlide(-1)}>
        <span className="arrows__icon">
          <svg className="arrows__icon-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </span>
      </button>
      <button type="button" className="arrows__item arrows__item--next" onClick={() => changeSlide(1)}>
        <span className="arrows__icon">
          <svg className="arrows__icon-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
        </span>
      </button>
    </div>
  );
}
