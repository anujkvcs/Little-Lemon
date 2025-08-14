import React from 'react';
import { useApp } from '../../../context/AppContext';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  const { state, dispatch } = useApp();

  const handleSearch = (e) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value });
  };

  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search restaurants or cuisines..."
        value={state.searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}