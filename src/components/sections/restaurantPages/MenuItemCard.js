import React from 'react';
import { FaStar, FaPlus } from 'react-icons/fa';

export default function MenuItemCard({ item, onAddToCart }) {
  return (
    <div className="menu-item-card">
      <img src={item.image} alt={item.name} />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p className="description">{item.description}</p>
        <div className="item-meta">
          <span className="rating">
            <FaStar /> {item.rating}
          </span>
          <span className="price">${item.price}</span>
        </div>
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          <FaPlus /> Add to Cart
        </button>
      </div>
    </div>
  );
}