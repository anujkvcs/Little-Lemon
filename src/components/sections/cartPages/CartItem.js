import React from 'react';
import { useApp } from '../../../context/AppContext';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

export default function CartItem({ item }) {
  const { dispatch } = useApp();

  const updateQuantity = (newQuantity) => {
    if (newQuantity === 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    } else {
      dispatch({ 
        type: 'UPDATE_QUANTITY', 
        payload: { ...item, quantity: newQuantity }
      });
    }
  };

  const removeItem = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p className="restaurant-name">{item.restaurantName}</p>
        <p className="item-price">${item.price}</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => updateQuantity(item.quantity - 1)}>
          <FaMinus />
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.quantity + 1)}>
          <FaPlus />
        </button>
      </div>
      <div className="item-total">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button className="remove-btn" onClick={removeItem}>
        <FaTrash />
      </button>
    </div>
  );
}