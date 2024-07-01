import React from 'react';
import imageA from './churrasco.jpg';
import imageB from './papascheddar.jpeg';
import imageC from './sardinas.jpeg';

const ItemListContainer = () => {
  const items = [
    { id: 1, name: 'Churrasco', price: '$20', image: imageA },
    { id: 2, name: 'Papas cheddar', price: '$24.95', image: imageB },
    { id: 3, name: 'Sardinas', price: '$44.95', image: imageC },
  ];

  return (
    <div className="item-list-container">
      {items.map(item => (
        <div key={item.id} className="item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;

