import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useApp } from '../context/AppContext';
import toast from 'react-hot-toast';

function Checkout() {
  const { state, dispatch } = useApp();
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    paymentMethod: 'card'
  });

  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_CART' });
    toast.success('Order placed successfully!');
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Checkout</h1>
      <Row>
        <Col lg={8}>
          <Card className="mb-4">
            <Card.Body>
              <h4>Delivery Information</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Delivery Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                  >
                    <option value="card">Credit/Debit Card</option>
                    <option value="cash">Cash on Delivery</option>
                  </Form.Select>
                </Form.Group>
                
                <Button type="submit" className="btn-custom">
                  Place Order - ${(total + 2.99).toFixed(2)}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4>Order Summary</h4>
              <hr />
              {state.cart.map(item => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>{item.name} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;