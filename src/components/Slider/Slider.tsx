import React, { useState } from 'react';
import { images } from '../../store/images';
import { Arrows } from '../Arrows/Arrows';
import { Dots } from '../Dots/Dots';
import { SliderItem } from '../SliderItem/SliderItem';
import { SliderContext } from '../../context/SliderContext';
import './Slider.scss';

export const Slider = () => {
  const [slide, setSlide] = useState(0);
  const items = images;

  const changeSlide = (direction = 1): void => {
    let slideIndex = 0;

    if (slide + direction < 0) {
      slideIndex = items.length - 1;
    } else {
      slideIndex = (slide + direction) % items.length;
    }

    setSlide(slideIndex);
  };

  const goToSlide = (index: number): void => {
    setSlide(index % items.length);
  };

  return (
    <div className="slider mb-3">
      <SliderContext.Provider
        value={{
          slides: items,
          slideIndex: slide,
          changeSlide,
          goToSlide,
        }}
      >
        {items.length > 0 ? (
          <>
            <Arrows />
            <SliderItem slide={items[slide]} />
            <Dots />
          </>
        ) : null}
      </SliderContext.Provider>
    </div>
  );
}
