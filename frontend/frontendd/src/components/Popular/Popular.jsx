import React from 'react';
import './Popular.css';
import data_product from"../Assets/data.js"
import Item from '../Items/Item.jsx';
import { useRef } from 'react';
import {motion,  useScroll } from "framer-motion";
const Popular = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })
  return (
    <motion.div
ref={ref}
initial="hidden"
animate="show"
style={{ scaleX: scrollYProgress}}
transition={{ type: "spring", stiffness: 100, damping: 20 }}

    className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Popular;
