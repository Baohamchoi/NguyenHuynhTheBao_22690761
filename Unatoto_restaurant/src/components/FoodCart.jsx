import React from 'react';
import { useCart } from '../CartContext';
import { Minus, Plus, Trash2, CreditCard } from 'lucide-react';

const FoodCart = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice,
    clearCart,
    selectedItems,
    toggleItemSelection,
    removeSelectedItems
  } = useCart();

  const handleCheckout = () => {
    alert('Thank you for your order! Total: $' + getTotalPrice().toFixed(2));
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-4">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="japanese-pattern">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Your Cart</h2>
          <div className="d-flex gap-2">
            <button 
              className="btn btn-danger"
              onClick={removeSelectedItems}
              disabled={selectedItems.length === 0}
            >
              Delete Selected ({selectedItems.length})
            </button>
            <button 
              className="btn btn-danger"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            {cartItems.map(item => (
              <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                <input
                  type="checkbox"
                  className="food-checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => toggleItemSelection(item.id)}
                />
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="me-3" 
                  style={{ width: '100px', height: '70px', objectFit: 'cover' }} 
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.name}</h5>
                  <p className="mb-1">${item.price.toFixed(2)}</p>
                  <div className="d-flex align-items-center">
                    <button 
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button 
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-danger ms-3"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <div className="ms-3">
                  <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <h4>Total: ${getTotalPrice().toFixed(2)}</h4>
              <button 
                className="btn btn-gold d-flex align-items-center gap-2"
                onClick={handleCheckout}
              >
                <CreditCard size={20} /> Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;