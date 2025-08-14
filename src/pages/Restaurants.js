import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { restaurants } from '../data/restaurants';

function Restaurants() {
  return (
    <Container className="py-5">
      <h1 className="section-title">Our Restaurants</h1>
      <Row>
        {restaurants.map(restaurant => (
          <Col key={restaurant.id} md={6} lg={4} className="mb-4">
            <Card className="restaurant-card h-100">
              <Card.Img 
                variant="top" 
                src={restaurant.image} 
                alt={restaurant.name}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Text className="text-muted">{restaurant.cuisine}</Card.Text>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span>
                    <FaStar className="text-warning me-1" />
                    {restaurant.rating}
                  </span>
                  <span className="text-muted">{restaurant.deliveryTime}</span>
                </div>
                <Button 
                  as={Link} 
                  to={`/restaurant/${restaurant.id}`}
                  className="btn-custom mt-auto"
                >
                  View Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Restaurants;