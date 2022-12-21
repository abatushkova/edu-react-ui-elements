import React, { useState, ChangeEvent } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResult } from '../SearchResult/SearchResult';
import { candies, filterItems } from '../../store/candies';

export const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const filteredCandies = filterItems(candies, query);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search mb-3">
      <SearchBar
        query={query}
        onChange={(e) => handleChange(e)}
      />
      <SearchResult candies={filteredCandies} />
    </div>
  );
}
