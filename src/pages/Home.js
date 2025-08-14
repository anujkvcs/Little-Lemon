import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUtensils, FaTruck, FaClock } from 'react-icons/fa';

function Home() {
  return (
    <>
      {/* Opening Banner */}
      <div className="opening-banner">
        <Container>
          <Row>
            <Col>
              🎉 <strong>Big News!</strong> Little Lemon is now <strong>FoodHub</strong> - Same great food, bigger selection! 🍽️
            </Col>
          </Row>
        </Container>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <Container>
          <Row>
            <Col>
              <h1>Delicious Food Delivered</h1>
              <p>Order from your favorite restaurants and get fresh food delivered to your door</p>
              <Button as={Link} to="/restaurants" className="btn-custom me-3">
                Order Now
              </Button>
              <Button as={Link} to="/reservations" variant="outline-light">
                Reserve Table
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features */}
      <Container className="py-5">
        <h2 className="section-title">Why Choose FoodHub?</h2>
        <Row>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <FaUtensils className="feature-icon" />
                <h4>Quality Food</h4>
                <p>Fresh ingredients from the best restaurants in town</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <FaTruck className="feature-icon" />
                <h4>Fast Delivery</h4>
                <p>Quick delivery to your doorstep in 30 minutes or less</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <FaClock className="feature-icon" />
                <h4>24/7 Service</h4>
                <p>Order anytime, anywhere with our round-the-clock service</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;