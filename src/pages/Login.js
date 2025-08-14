import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useApp } from '../context/AppContext';
import toast from 'react-hot-toast';

function Login() {
  const { dispatch } = useApp();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    isSignUp: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: Date.now(),
      name: formData.isSignUp ? formData.name : 'John Doe',
      email: formData.email
    };
    dispatch({ type: 'SET_USER', payload: user });
    toast.success(`Welcome ${user.name}!`);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Card>
            <Card.Body className="p-4">
              <h3 className="text-center mb-4">
                {formData.isSignUp ? 'Sign Up' : 'Login'}
              </h3>
              
              <Form onSubmit={handleSubmit}>
                {formData.isSignUp && (
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </Form.Group>
                )}
                
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </Form.Group>
                
                <Button type="submit" className="btn-custom w-100 mb-3">
                  {formData.isSignUp ? 'Sign Up' : 'Login'}
                </Button>
              </Form>
              
              <div className="text-center">
                <Button 
                  variant="link" 
                  onClick={() => setFormData({...formData, isSignUp: !formData.isSignUp})}
                >
                  {formData.isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;