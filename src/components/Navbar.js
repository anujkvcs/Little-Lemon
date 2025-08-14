import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useApp } from '../context/AppContext';

function AppNavbar() {
  const { state } = useApp();
  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          🍽️ FoodHub
        </Navbar.Brand>
        
        <Navbar.Toggle />
        
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/restaurants">Restaurants</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/reservations">Reservations</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;