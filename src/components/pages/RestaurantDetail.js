import React from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { restaurants } from '../../data/enhancedMockData';
import MenuItemCard from '../sections/restaurantPages/MenuItemCard';
import { showSuccess } from '../common/Toast';
import { FaStar, FaClock, FaMotorcycle } from 'react-icons/fa';

export default function RestaurantDetail() {
  const { id } = useParams();
  const { dispatch } = useApp();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const addToCart = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, restaurantId: restaurant.id, restaurantName: restaurant.name }
    });
    showSuccess(`${item.name} added to cart!`);
  };

  return (
    <div className="restaurant-detail">
      <div className="restaurant-header">
        <img src={restaurant.image} alt={restaurant.name} className="restaurant-banner" />
        <div className="restaurant-info-overlay">
          <h1>{restaurant.name}</h1>
          <p className="cuisine">{restaurant.cuisine}</p>
          <div className="restaurant-meta">
            <span><FaStar /> {restaurant.rating}</span>
            <span><FaClock /> {restaurant.deliveryTime}</span>
            <span><FaMotorcycle /> ${restaurant.deliveryFee} delivery</span>
          </div>
        </div>
      </div>
      
      <div className="menu-section">
        <h2>Menu</h2>
        <div className="menu-grid">
          {restaurant.menu.map(item => (
            <MenuItemCard 
              key={item.id} 
              item={item} 
              onAddToCart={() => addToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}