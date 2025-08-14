import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUtensils, FaHeart, FaUsers, FaStar } from 'react-icons/fa';

export default function About() {
  return (
    <>
      {/* About Hero */}
      <section className="about-hero">
        <Container>
          <Row className="text-center">
            <Col>
              <h1 className="display-4 mb-4">About FoodHub</h1>
              <p className="lead">
                We're passionate about connecting food lovers with amazing restaurants 
                and delivering exceptional dining experiences right to your door.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Content */}
      <section className="about-content">
        <Container>
          <Row className="mb-5">
            <Col lg={6}>
              <h2 className="section-title text-start">Our Story</h2>
              <p className="mb-4">
                Founded in 2020, FoodHub started as a small family business with a simple mission: 
                to make great food accessible to everyone. What began as a single restaurant 
                partnership has grown into a thriving platform connecting hundreds of restaurants 
                with thousands of hungry customers.
              </p>
              <p>
                We believe that good food brings people together, and our technology makes it 
                easier than ever to discover new flavors, support local businesses, and enjoy 
                restaurant-quality meals from the comfort of your home.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src={require('../../assets/food/food2.jpeg')} 
                alt="Our restaurant" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>

          {/* Stats */}
          <Row className="text-center mb-5">
            <Col md={3} className="mb-4">
              <div className="step-card">
                <FaUtensils className="step-icon" />
                <h3>500+</h3>
                <p>Partner Restaurants</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="step-card">
                <FaUsers className="step-icon" />
                <h3>50K+</h3>
                <p>Happy Customers</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="step-card">
                <FaHeart className="step-icon" />
                <h3>1M+</h3>
                <p>Orders Delivered</p>
              </div>
            </Col>
            <Col md={3} className="mb-4">
              <div className="step-card">
                <FaStar className="step-icon" />
                <h3>4.8</h3>
                <p>Average Rating</p>
              </div>
            </Col>
          </Row>

          {/* Team */}
          <Row>
            <Col>
              <h2 className="section-title">Meet Our Team</h2>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="team-member">
              <img 
                src={require('../../assets/food/food3.jpeg')} 
                alt="Team member" 
                className="rounded-circle mb-3"
              />
              <h4>Sarah Johnson</h4>
              <p className="text-muted">Founder & CEO</p>
              <p>Passionate about food and technology, Sarah leads our mission to revolutionize food delivery.</p>
            </Col>
            <Col md={4} className="team-member">
              <img 
                src={require('../../assets/food/food4.webp')} 
                alt="Team member" 
                className="rounded-circle mb-3"
              />
              <h4>Mike Chen</h4>
              <p className="text-muted">Head Chef</p>
              <p>With 15 years of culinary experience, Mike ensures quality standards across all partner restaurants.</p>
            </Col>
            <Col md={4} className="team-member">
              <img 
                src={require('../../assets/food/food5.jpeg')} 
                alt="Team member" 
                className="rounded-circle mb-3"
              />
              <h4>Emily Davis</h4>
              <p className="text-muted">Customer Success</p>
              <p>Emily makes sure every customer has an amazing experience from order to delivery.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
