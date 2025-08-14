import React from 'react';
import { useParams } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { FaCheck, FaClock, FaMotorcycle } from 'react-icons/fa';

export default function OrderTracking() {
  const { orderId } = useParams();
  const { state } = useApp();

  const order = state.currentOrder;

  if (!order || order.id !== orderId) {
    return <div>Order not found</div>;
  }

  const orderSteps = [
    { id: 1, title: 'Order Confirmed', icon: <FaCheck />, completed: true },
    { id: 2, title: 'Preparing Food', icon: <FaClock />, completed: true },
    { id: 3, title: 'Out for Delivery', icon: <FaMotorcycle />, completed: false },
    { id: 4, title: 'Delivered', icon: <FaCheck />, completed: false }
  ];

  return (
    <div className="order-tracking">
      <h1>Order Tracking</h1>
      <div className="order-info">
        <h2>Order #{order.id}</h2>
        <p>Estimated delivery: {order.estimatedTime}</p>
      </div>

      <div className="tracking-steps">
        {orderSteps.map((step, index) => (
          <div key={step.id} className={`tracking-step ${step.completed ? 'completed' : ''}`}>
            <div className="step-icon">{step.icon}</div>
            <div className="step-info">
              <h3>{step.title}</h3>
              {step.completed && <span className="completed-text">✓ Completed</span>}
            </div>
            {index < orderSteps.length - 1 && <div className="step-line"></div>}
          </div>
        ))}
      </div>

      <div className="order-details">
        <h3>Order Items</h3>
        {order.items.map(item => (
          <div key={`${item.id}-${item.restaurantId}`} className="order-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>{item.restaurantName}</p>
              <p>Qty: {item.quantity} × ${item.price}</p>
            </div>
            <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="order-total">
          <strong>Total: ${order.total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}