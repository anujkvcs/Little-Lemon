import React from 'react';
import { FaSearch, FaShoppingCart, FaTruck } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Browse Restaurants",
      description: "Discover restaurants and cuisines near you"
    },
    {
      icon: <FaShoppingCart />,
      title: "Add to Cart",
      description: "Select your favorite dishes and add them to cart"
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description: "Get your food delivered hot and fresh to your door"
    }
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}