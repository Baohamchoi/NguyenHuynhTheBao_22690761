import React, { useState } from 'react';
import FoodCard from './FoodCard';
import { foods } from '../data/foods';

const FoodGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFoods = activeCategory === 'all'
    ? foods
    : foods.filter(food => food.category.toLowerCase() === activeCategory);

  return (
    <div className="container py-4">
      <div className="japanese-pattern">
        <h1 className="text-center mb-4">Our Menu</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredFoods.map(food => (
            <div key={food.id} className="col">
              <FoodCard food={food} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodGrid;