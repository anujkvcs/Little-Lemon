import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

function Cart() {
  const { state, dispatch } = useApp();

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (state.cart.length === 0) {
    return (
      <Container className="py-5 text-center">
        <h2>Your cart is empty</h2>
        <p>Add some delicious items to get started!</p>
        <Button as={Link} to="/restaurants" className="btn-custom">
          Browse Restaurants
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Your Cart</h1>
      <Row>
        <Col lg={8}>
          <ListGroup>
            {state.cart.map(item => (
              <ListGroup.Item key={item.id} className="d-flex align-items-center">
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  className="rounded me-3"
                />
                <div className="flex-grow-1">
                  <h5>{item.name}</h5>
                  <p className="text-muted mb-0">${item.price}</p>
                </div>
                <div className="d-flex align-items-center">
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <FaMinus />
                  </Button>
                  <span className="mx-3">{item.quantity}</span>
                  <Button 
                    variant="outline-secondary" 
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <FaPlus />
                  </Button>
                  <Button 
                    variant="outline-danger" 
                    size="sm" 
                    className="ms-3"
                    onClick={() => removeItem(item.id)}
                  >
                    <FaTrash />
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        
        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4>Order Summary</h4>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Delivery:</span>
                <span>$2.99</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total: ${(total + 2.99).toFixed(2)}</strong>
              </div>
              <Button as={Link} to="/checkout" className="btn-custom w-100 mt-3">
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;