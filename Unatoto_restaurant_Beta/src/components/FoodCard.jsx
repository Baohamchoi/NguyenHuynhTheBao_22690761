import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <img src={food.image} className="card-img-top" alt={food.name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text">{food.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fs-5">${food.price.toFixed(2)}</span>
          <button 
            className="btn btn-gold d-flex align-items-center gap-2"
            onClick={() => addToCart(food)}
          >
            <Plus size={18} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;