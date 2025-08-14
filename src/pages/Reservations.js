import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import toast from 'react-hot-toast';

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    toast.success('Reservation confirmed!');
    setTimeout(() => setShowSuccess(false), 5000);
  };

  if (showSuccess) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Alert variant="success" className="text-center">
              <h3>Reservation Confirmed!</h3>
              <p>Thank you {formData.name}! Your table for {formData.guests} guests on {formData.date} at {formData.time} has been confirmed.</p>
              <Button 
                className="btn-custom"
                onClick={() => setShowSuccess(false)}
              >
                Make Another Reservation
              </Button>
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <section className="hero">
        <Container>
          <Row>
            <Col>
              <h1>Reserve Your Table</h1>
              <p>Book a table and enjoy a wonderful dining experience</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card>
              <Card.Body className="p-4">
                <h3 className="mb-4">Make a Reservation</h3>
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Number of Guests</Form.Label>
                        <Form.Select
                          value={formData.guests}
                          onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        >
                          {[1,2,3,4,5,6,7,8].map(num => (
                            <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Time</Form.Label>
                        <Form.Select
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          required
                        >
                          <option value="">Select time</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="18:00">6:00 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="21:00">9:00 PM</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <div className="text-center">
                    <Button type="submit" className="btn-custom px-5">
                      Confirm Reservation
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Reservations;