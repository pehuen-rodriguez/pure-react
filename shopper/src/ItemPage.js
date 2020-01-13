import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './ItemPage.css';

const ItemPage = ({ items, onAddToCart }) => {
  return (
    <ul className="ItemPage-items">
      {
        items.map(item => 
          <li key={item.id} className="ItemPage-item">
            <Item
              item={item}
              onAddToCart={() => onAddToCart(item)}>
                <button 
                  onClick={() => onAddToCart(item)}
                  className="Item-addToCart"
                >
                  Add to Cart
                </button>
            </Item>
          </li>
      )}
    </ul>
  )
}

ItemPage.protoTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;
