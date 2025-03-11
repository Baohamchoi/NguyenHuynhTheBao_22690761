import React, { useState } from 'react';
import FoodCard from './FoodCard';
import { foods } from '../data/foods';
import background from '../images/japanese-pattern.jpg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm import Bootstrap CSS

const FoodGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'sushi', name: 'Sushi' },
    { id: 'noodles', name: 'Noodles' },
    { id: 'fried', name: 'Fried Dishes' },
  ];

  const filteredFoods = activeCategory === 'all'
    ? foods
    : foods.filter(food => food.category.toLowerCase() === activeCategory);

  return (
    <div className="">
      <div
        className="japanese-pattern"
        style={{
          position: 'relative',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
        }}
      >
        {/* Lớp phủ tối */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Độ tối 70%
            zIndex: 1, // Đặt lớp phủ trên background nhưng dưới nội dung
          }}
        />

        {/* Nội dung với z-index cao hơn lớp phủ */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="text-center text-yellow-500 mb-4 fs-1 fw-bold">
            Our Menu
          </h1>

          <div className="d-flex justify-content-center gap-3 mb-4">
            {categories.map(category => (
              <button
                key={category.id}
                className={`btn ${activeCategory === category.id 
                  ? 'active-gold' 
                  : 'btn-outline-gold'}`}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  transition: 'all 0.3s ease',
                  borderColor: '#ffc107',
                  color: '#ffc107',
                  ...(activeCategory === category.id && {
                    backgroundColor: '#ffca28',
                    borderColor: '#ffca28',
                    color: '#fff',
                    boxShadow: '0 0 10px rgba(255, 202, 40, 0.7)',
                  }),
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {filteredFoods.map(food => (
              <div key={food.id} className="col">
                <FoodCard food={food} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodGrid;