import React from 'react';
import { all_product } from '../Assets/all_product';
import Popular from '../Popular/Popular.jsx';

const Item = () => {
  return (
    <div className='product-list'>
{all_product.map(product => (
  <Popular 
    key={product.id}
    image={product.image}
    name={product.name}
    new_price={product.new_price}
    old_price={product.old_price}
  />
))}
    </div>
  );
};

export default Item;
