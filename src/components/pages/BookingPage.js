import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaCalendarAlt, FaClock, FaUsers, FaUtensils } from 'react-icons/fa';
import { showSuccess } from '../common/Toast';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '2',
    name: '',
    email: '',
    phone: '',
    occasion: '',
    requests: ''
  });
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowConfirmation(true);
      showSuccess('Table reservation confirmed!');
    }, 2000);
  };

  if (showConfirmation) {
    return (
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="text-center border-0 shadow">
              <Card.Body className="p-5">
                <div className="mb-4">
                  <FaUtensils size={60} className="text-success mb-3" />
                  <h2 className="text-success">Reservation Confirmed!</h2>
                </div>
                <Alert variant="success" className="mb-4">
                  <h5>Thank you, {formData.name}!</h5>
                  <p className="mb-0">
                    Your table for {formData.guests} guests on {formData.date} at {formData.time} has been confirmed.
                  </p>
                </Alert>
                <p className="text-muted mb-4">
                  We've sent a confirmation email to {formData.email}.
                </p>
                <Button 
                  variant="primary" 
                  onClick={() => setShowConfirmation(false)}
                  className="me-3"
                >
                  Make Another Reservation
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <>
      <section className="hero-section">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="display-4 mb-4">Reserve Your Table</h1>
              <p className="lead">
                Book a table and enjoy an unforgettable dining experience.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="reservation-form border-0 shadow">
              <Card.Body className="p-4">
                <h3 className="mb-4 text-center">Make a Reservation</h3>
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label><FaCalendarAlt className="me-2" />Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label><FaClock className="me-2" />Time</Form.Label>
                        <Form.Select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
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

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label><FaUsers className="me-2" />Guests</Form.Label>
                        <Form.Select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          required
                        >
                          {[1,2,3,4,5,6,7,8].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          placeholder="Your phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="text-center">
                    <Button 
                      variant="primary" 
                      type="submit" 
                      size="lg"
                      disabled={loading}
                    >
                      {loading ? 'Confirming...' : 'Confirm Reservation'}
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
