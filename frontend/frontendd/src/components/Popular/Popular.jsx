import React from 'react';
import './Popular.css';

const Popular = ({ image, name, new_price, old_price }) => {
  return (
    <div className='popular-item'>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>New Price: ${new_price}</p>
      <p>Old Price: ${old_price}</p>
    </div>
  );
};

export default Popular;
