import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useApp } from '../../context/AppContext';
import { restaurants } from '../../data/enhancedMockData';
import RestaurantCard from '../sections/restaurantPages/RestaurantCard';
import { FaSearch } from 'react-icons/fa';

export default function Restaurants() {
  const { state, dispatch } = useApp();

  useEffect(() => {
    dispatch({ type: 'SET_RESTAURANTS', payload: restaurants });
  }, [dispatch]);

  const filteredRestaurants = state.restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(state.searchQuery.toLowerCase());
    const matchesCategory = state.selectedCategory === 'all' || 
                           restaurant.cuisine.toLowerCase() === state.selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'mediterranean', 'indian', 'italian', 'american'];

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="section-title">Restaurants Near You</h1>
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col md={8}>
          <div className="position-relative">
            <Form.Control
              type="text"
              placeholder="Search restaurants or cuisines..."
              value={state.searchQuery}
              onChange={(e) => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
              className="search-input pe-5"
            />
            <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
          </div>
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col>
          <div className="category-filters">
            {categories.map(category => (
              <Button
                key={category}
                variant={state.selectedCategory === category ? 'primary' : 'outline-secondary'}
                size="sm"
                className="category-btn me-2 mb-2"
                onClick={() => dispatch({ type: 'SET_CATEGORY', payload: category })}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
      
      <Row>
        {filteredRestaurants.map(restaurant => (
          <Col key={restaurant.id} lg={4} md={6} className="mb-4">
            <RestaurantCard restaurant={restaurant} />
          </Col>
        ))}
      </Row>
      
      {filteredRestaurants.length === 0 && (
        <Row>
          <Col className="text-center py-5">
            <h4>No restaurants found</h4>
            <p className="text-muted">Try adjusting your search or filters</p>
          </Col>
        </Row>
      )}
    </Container>
  );
}