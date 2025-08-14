import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useApp } from '../context/AppContext';
import { restaurants } from '../data/restaurants';
import toast from 'react-hot-toast';

function RestaurantDetail() {
  const { id } = useParams();
  const { dispatch } = useApp();
  const restaurant = restaurants.find(r => r.id === parseInt(id));

  if (!restaurant) {
    return <Container className="py-5"><h2>Restaurant not found</h2></Container>;
  }

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <img 
            src={restaurant.image} 
            alt={restaurant.name}
            className="w-100 rounded"
            style={{ height: '300px', objectFit: 'cover' }}
          />
        </Col>
      </Row>
      
      <Row className="mb-4">
        <Col>
          <h1>{restaurant.name}</h1>
          <p className="text-muted">{restaurant.cuisine}</p>
          <div className="d-flex align-items-center">
            <FaStar className="text-warning me-1" />
            <span>{restaurant.rating}</span>
            <span className="text-muted ms-3">{restaurant.deliveryTime}</span>
          </div>
        </Col>
      </Row>

      <h2 className="mb-4">Menu</h2>
      <Row>
        {restaurant.menu.map(item => (
          <Col key={item.id} md={6} className="mb-4">
            <Card className="menu-item">
              <Row className="g-0">
                <Col md={4}>
                  <Card.Img 
                    src={item.image} 
                    alt={item.name}
                    className="h-100"
                  />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="text-primary mb-0">${item.price}</h5>
                      <Button 
                        className="btn-custom"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default RestaurantDetail;