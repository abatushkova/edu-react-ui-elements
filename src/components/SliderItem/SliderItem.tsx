import React from 'react';
import './SliderItem.scss';

export interface ISlideModel {
  id: number;
  url: string;
  desc: string;
}

interface ISlideProps {
  data: ISlideModel;
}

export const SliderItem = (props: ISlideProps) => {
  const { url, desc } = props.data;

  return (
    <div className="slide">
      <figure className="slide__figure">
        <img src={url} alt={desc} className="slide__image" />
        <figcaption className="slide__desc">{desc}</figcaption>
      </figure>
    </div>
  );
}
