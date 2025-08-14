import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-warning mb-3">🍽️ FoodHub</h5>
            <p>Chicago's premier food delivery platform connecting you with the best local restaurants since 2020.</p>
            <div className="d-flex gap-3">
              <FaFacebook size={24} className="text-warning" />
              <FaInstagram size={24} className="text-warning" />
              <FaTwitter size={24} className="text-warning" />
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 className="text-warning mb-3">Contact Info</h5>
            <div className="d-flex align-items-center mb-2">
              <FaMapMarkerAlt className="me-2 text-warning" />
              <span>123 Michigan Avenue, Chicago, IL 60601</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <FaPhone className="me-2 text-warning" />
              <span>(312) 555-FOOD</span>
            </div>
            <div className="d-flex align-items-center">
              <FaEnvelope className="me-2 text-warning" />
              <span>info@foodhub.com</span>
            </div>
          </Col>
          
          <Col md={4} className="mb-4">
            <h5 className="text-warning mb-3">Business Hours</h5>
            <p className="mb-1"><strong>Delivery:</strong> 24/7</p>
            <p className="mb-1"><strong>Customer Support:</strong></p>
            <p className="mb-1">Mon-Fri: 8:00 AM - 10:00 PM</p>
            <p className="mb-1">Sat-Sun: 9:00 AM - 9:00 PM</p>
            <p className="mb-0"><strong>Office:</strong> Mon-Fri: 9:00 AM - 6:00 PM</p>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © 2024 FoodHub Chicago. All rights reserved. | 
              <span className="text-warning"> Made with ❤️ in Chicago</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;