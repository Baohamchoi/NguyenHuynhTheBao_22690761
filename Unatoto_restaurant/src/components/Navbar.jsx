import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { ShoppingCart, Utensils } from 'lucide-react';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'sushi', name: 'Sushi' },
    { id: 'noodles', name: 'Noodles' },
    { id: 'fried', name: 'Fried Dishes' },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <Utensils className="me-2" /> 和食レストラン
          </Link>
          <Link to="/cart" className="btn btn-outline-light position-relative">
            <ShoppingCart />
            {getTotalItems() > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </div>
      </nav>
      <div className="category-nav">
        <div className="container">
          <ul className="nav justify-content-center">
            {categories.map(category => (
              <li className="nav-item" key={category.id}>
                <button
                  className={`nav-link ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;