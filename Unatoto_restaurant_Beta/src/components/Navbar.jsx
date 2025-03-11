import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import logo from '../images/logounatoto.webp';

const Navbar = () => {
  const { getTotalItems } = useCart();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo}  alt="" className="img-fluid me-3" style={{ maxWidth: '40px' }}/> <b className="text-[#FFD700] hover:text-yellow-400 transition-all duration-300">UNATOTO RESTAURANT</b>
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
    </>
  );
};

export default Navbar;