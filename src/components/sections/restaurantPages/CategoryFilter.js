import React from 'react';
import { useApp } from '../../../context/AppContext';
import { categories } from '../../../data/enhancedMockData';

export default function CategoryFilter() {
  const { state, dispatch } = useApp();

  const handleCategoryChange = (categoryId) => {
    dispatch({ type: 'SET_CATEGORY', payload: categoryId });
  };

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category.id}
          className={`category-btn ${state.selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => handleCategoryChange(category.id)}
        >
          <span className="category-icon">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
}