import React from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../../../data/enhancedMockData';
import RestaurantCard from '../restaurantPages/RestaurantCard';

export default function FeaturedRestaurants() {
  const featuredRestaurants = restaurants.filter(restaurant => restaurant.featured);

  return (
    <section className="featured-restaurants">
      <div className="section-header">
        <h2>Featured Restaurants</h2>
        <Link to="/restaurants" className="view-all-btn">View All</Link>
      </div>
      <div className="restaurants-grid">
        {featuredRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  );
}