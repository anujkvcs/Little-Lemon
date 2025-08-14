import React from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navigation() {
  const { state } = useApp();
  const cartItemCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={require("../assets/nav-logo.png")}
            alt="FoodHub logo"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/restaurants">Restaurants</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/reservations">Reservations</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link as={Link} to="/cart" className="position-relative">
              <FaShoppingCart size={20} />
              {cartItemCount > 0 && (
                <Badge 
                  bg="warning" 
                  text="dark" 
                  className="position-absolute top-0 start-100 translate-middle rounded-pill"
                >
                  {cartItemCount}
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
