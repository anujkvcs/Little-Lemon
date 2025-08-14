import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeaturedRestaurants from "../sections/headingPages/FeaturedRestaurants";
import HowItWorks from "../sections/headingPages/HowItWorks";
import Specials from "../sections/headingPages/Specials";
import Testimonials from "../sections/headingPages/Testimonials";

export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="hero-content align-items-center">
            <Col lg={6} className="hero-text">
              <h1>FoodHub</h1>
              <h2>Chicago</h2>
              <p className="lead">
                Discover amazing restaurants and get your favorite food delivered 
                fresh and fast to your doorstep. From local favorites to trending cuisines.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/restaurants">
                  <Button variant="primary" size="lg">Order Now</Button>
                </Link>
                <Link to="/reservations">
                  <Button variant="outline-primary" size="lg">Reserve Table</Button>
                </Link>
              </div>
            </Col>
            <Col lg={6} className="hero-image">
              <img 
                src={require('../../assets/food/food1.png')} 
                alt="Delicious food" 
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <main>
        <FeaturedRestaurants />
        <HowItWorks />
        <Specials />
        <Testimonials />
      </main>
    </>
  );
}
