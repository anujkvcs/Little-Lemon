import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import CartItem from '../sections/cartPages/CartItem';
import EmptyState from '../common/EmptyState';
import { FaShoppingCart } from 'react-icons/fa';

export default function Cart() {
  const { state } = useApp();

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = state.cart.length > 0 ? 2.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  if (state.cart.length === 0) {
    return (
      <div className="cart-page">
        <EmptyState
          icon={<FaShoppingCart size={64} />}
          title="Your cart is empty"
          description="Add some delicious items to get started!"
          actionText="Browse Restaurants"
          actionLink="/restaurants"
        />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {state.cart.map(item => (
            <CartItem key={`${item.id}-${item.restaurantId}`} item={item} />
          ))}
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-line">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="summary-line total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
        </div>
      </div>
    </div>
  );
}