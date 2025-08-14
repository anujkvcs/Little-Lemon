import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { showSuccess, showLoading } from '../common/Toast';

export default function Checkout() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 2.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = showLoading('Placing your order...');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const orderId = Date.now().toString();
    const order = {
      id: orderId,
      items: state.cart,
      total,
      address: formData.address,
      phone: formData.phone,
      status: 'confirmed',
      estimatedTime: '30-45 min'
    };
    
    dispatch({ type: 'SET_CURRENT_ORDER', payload: order });
    dispatch({ type: 'CLEAR_CART' });
    showSuccess('Order placed successfully!');
    navigate(`/order-tracking/${orderId}`);
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-section">
            <h3>Delivery Address</h3>
            <input
              type="text"
              name="address"
              placeholder="Enter your full address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-section">
            <h3>Payment Method</h3>
            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
              <option value="card">Credit/Debit Card</option>
              <option value="cash">Cash on Delivery</option>
            </select>
            
            {formData.paymentMethod === 'card' && (
              <>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
                <div className="card-details">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </>
            )}
          </div>

          <button type="submit" className="place-order-btn">
            Place Order - ${total.toFixed(2)}
          </button>
        </form>

        <div className="order-summary">
          <h3>Order Summary</h3>
          {state.cart.map(item => (
            <div key={`${item.id}-${item.restaurantId}`} className="summary-item">
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-totals">
            <div><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div><span>Delivery</span><span>${deliveryFee.toFixed(2)}</span></div>
            <div><span>Tax</span><span>${tax.toFixed(2)}</span></div>
            <div className="total"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}