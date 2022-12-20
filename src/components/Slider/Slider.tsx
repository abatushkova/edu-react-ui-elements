import React, { useState, createContext } from 'react';
import { images } from '../../store/data';
import { Arrows } from '../Arrows/Arrows';
import { Dots } from '../Dots/Dots';
import { SliderItem, ISlideModel } from '../SliderItem/SliderItem';
import './Slider.scss';

export interface IContextModel {
  slides: ISlideModel[];
  slideIndex: number;
  changeSlide: (p: number) => void;
  goToSlide: (p: number) => void;
}

export const SliderContext = createContext<IContextModel>({
  slides: [],
  slideIndex: 0,
  changeSlide: () => {},
  goToSlide: () => {},
});

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
    <div className="slider">
      <SliderContext.Provider
        value={{
          slides: items,
          slideIndex: slide,
          changeSlide,
          goToSlide,
        }}
      >
        { items.length > 0 ? (
          <>
            <Arrows />
            <SliderItem data={items[slide]} />
            <Dots />
          </>
        ) : null }
      </SliderContext.Provider>
    </div>
  );
}
