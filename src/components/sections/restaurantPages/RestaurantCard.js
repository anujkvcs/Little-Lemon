import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar, FaClock, FaMotorcycle } from 'react-icons/fa';

export default function RestaurantCard({ restaurant }) {
  return (
    <Card as={Link} to={`/restaurant/${restaurant.id}`} className="restaurant-card h-100 text-decoration-none">
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={restaurant.image} 
          alt={restaurant.name}
          className="restaurant-card-img"
        />
        {restaurant.featured && (
          <Badge className="featured-badge position-absolute">
            Featured
          </Badge>
        )}
      </div>
      <Card.Body className="restaurant-card-body">
        <Card.Title className="restaurant-card-title">{restaurant.name}</Card.Title>
        <Card.Text className="text-muted mb-2">{restaurant.cuisine}</Card.Text>
        <div className="restaurant-meta">
          <small className="text-muted d-flex align-items-center">
            <FaStar className="text-warning me-1" /> {restaurant.rating}
          </small>
          <small className="text-muted d-flex align-items-center">
            <FaClock className="me-1" /> {restaurant.deliveryTime}
          </small>
          <small className="text-muted d-flex align-items-center">
            <FaMotorcycle className="me-1" /> ${restaurant.deliveryFee}
          </small>
        </div>
      </Card.Body>
    </Card>
  );
}