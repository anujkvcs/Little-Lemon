import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHeart, FaUsers, FaAward } from 'react-icons/fa';

function About() {
  return (
    <>
      <section className="hero">
        <Container>
          <Row>
            <Col>
              <h1>About FoodHub</h1>
              <p>Connecting food lovers with amazing restaurants since 2020</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={6}>
            <h2>Our Story</h2>
            <p>
              FoodHub was founded in 2020 in the heart of Chicago by food enthusiasts 
              Sarah Johnson and Mike Chen. What started as a small family business has 
              grown into the city's premier food delivery platform, connecting over 
              500 local restaurants with food lovers across Chicagoland.
            </p>
            <p>
              We believe great food brings people together. Our mission is to support 
              local restaurants while delivering exceptional dining experiences right 
              to your doorstep. From deep-dish pizza to authentic sushi, we've got 
              Chicago's diverse culinary scene covered.
            </p>
          </Col>
          <Col lg={6}>
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500"
              alt="Restaurant kitchen"
              className="img-fluid rounded"
            />
          </Col>
        </Row>

        {/* Contact Information */}
        <Row className="mb-5">
          <Col>
            <h2 className="section-title">Contact Us</h2>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <FaUsers className="feature-icon" />
                <h4>Visit Our Office</h4>
                <p><strong>FoodHub Headquarters</strong></p>
                <p>123 Michigan Avenue<br/>Chicago, IL 60601<br/>United States</p>
                <p><strong>Hours:</strong><br/>Mon-Fri: 9:00 AM - 6:00 PM<br/>Sat-Sun: 10:00 AM - 4:00 PM</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <FaHeart className="feature-icon" />
                <h4>Get In Touch</h4>
                <p><strong>Customer Support:</strong><br/>(312) 555-FOOD<br/>support@foodhub.com</p>
                <p><strong>Restaurant Partners:</strong><br/>(312) 555-BIZ<br/>partners@foodhub.com</p>
                <p><strong>General Inquiries:</strong><br/>info@foodhub.com</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <FaAward className="feature-icon" />
                <h4>Follow Us</h4>
                <p><strong>Social Media:</strong></p>
                <p>Facebook: @FoodHubChicago<br/>Instagram: @foodhub_chi<br/>Twitter: @FoodHubChi</p>
                <p><strong>Newsletter:</strong><br/>Subscribe for deals and updates<br/>newsletter@foodhub.com</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Google Maps */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-4">Find Us on the Map</h3>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1234567890!2d-87.6244212!3d41.8755616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca55810a493%3A0x4700ddf60fcb6de6!2s123%20N%20Michigan%20Ave%2C%20Chicago%2C%20IL%2060601!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FoodHub Location"
              ></iframe>
            </div>
            <div className="text-center mt-3">
              <p className="text-muted">
                Located in the heart of downtown Chicago, easily accessible by CTA and with 
                parking available nearby. We're just steps away from Millennium Park!
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <FaHeart className="feature-icon" />
                <h4>Made with Love</h4>
                <p>Every meal is prepared with care and passion by our restaurant partners</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <FaUsers className="feature-icon" />
                <h4>Community First</h4>
                <p>Supporting local restaurants and bringing communities together through food</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <FaAward className="feature-icon" />
                <h4>Quality Assured</h4>
                <p>We maintain the highest standards for food quality and delivery service</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;