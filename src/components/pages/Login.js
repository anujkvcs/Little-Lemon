import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { showSuccess, showError } from '../common/Toast';

export default function Login() {
  const { dispatch } = useApp();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isSignUp: false,
    name: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user = {
        id: Date.now(),
        name: formData.isSignUp ? formData.name : 'John Doe',
        email: formData.email
      };
      
      dispatch({ type: 'SET_USER', payload: user });
      showSuccess(`Welcome ${user.name}!`);
      setLoading(false);
    }, 1500);
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="login-card border-0">
            <Card.Body>
              <div className="text-center mb-4">
                <h2 className="mb-3">{formData.isSignUp ? 'Sign Up' : 'Login'}</h2>
                <p className="text-muted">
                  {formData.isSignUp 
                    ? 'Create your account to start ordering' 
                    : 'Welcome back! Please login to your account'
                  }
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                {formData.isSignUp && (
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 mb-3"
                  disabled={loading}
                >
                  {loading ? 'Please wait...' : (formData.isSignUp ? 'Sign Up' : 'Login')}
                </Button>
              </Form>

              <div className="text-center">
                <p className="mb-0">
                  {formData.isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  <Button 
                    variant="link" 
                    className="p-0 ms-1"
                    onClick={() => setFormData({...formData, isSignUp: !formData.isSignUp})}
                  >
                    {formData.isSignUp ? 'Login' : 'Sign Up'}
                  </Button>
                </p>
              </div>

              <hr className="my-4" />
              
              <div className="text-center">
                <small className="text-muted">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
