import React from 'react';
import { ICandyModel } from '../../store/candies';
import './SearchResult.scss';

interface ICandiesModel {
  candies: Array<ICandyModel>;
}

export const SearchResult = (props: ICandiesModel) => {
  const { candies } = props;

  return (
    <ul className="search-result">
      {candies.map(candy => (
        <li className="search-result__item" key={candy.id}>
          <p className="search-result__title">{candy.title}</p>
          <p className="search-result__desc">{candy.desc}</p>
        </li>
      ))}
    </ul>
  );
}
