import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar';
import FoodGrid from './components/FoodGrid';
import FoodCart from './components/FoodCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-vh-100 bg-light japanese-theme">
          <Navbar />
          <Routes>
            <Route path="/" element={<FoodGrid />} />
            <Route path="/cart" element={<FoodCart />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;