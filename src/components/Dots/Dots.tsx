import React, { useContext } from 'react';
import { SliderContext } from '../../context/SliderContext';
import './Dots.scss';

export const Dots = () => {
  const { goToSlide, slides, slideIndex } = useContext(SliderContext);

  return (
    <div className="dots">
      {slides.map((slide, index) => {
        return (
          <button
            type="button"
            key={slide.id}
            className={`dots__item ${slideIndex === index ? "dots__item--active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        )
      })}
    </div>
  );
}
