import React from 'react';
import { IImageModel } from '../../store/images';
import './SliderItem.scss';

interface ISlideModel {
  slide: IImageModel;
}

export const SliderItem = (props: ISlideModel) => {
  const { url, desc } = props.slide;

  return (
    <div className="slide">
      <figure className="slide__figure">
        <img src={url} alt={desc} className="slide__image" />
        <figcaption className="slide__desc">{desc}</figcaption>
      </figure>
    </div>
  );
}
