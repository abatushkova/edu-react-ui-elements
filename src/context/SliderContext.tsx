import { createContext } from 'react';
import { IImageModel } from '../store/images';

interface IContextModel {
  slides: IImageModel[];
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
