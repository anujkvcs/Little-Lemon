import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import About from "./pages/About";
import Reservation from "./pages/BookingPage";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";
import Restaurants from "./pages/Restaurants";
import RestaurantDetail from "./pages/RestaurantDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/order" element={<Order />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
