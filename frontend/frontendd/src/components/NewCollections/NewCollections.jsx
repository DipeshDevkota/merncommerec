import React, { useEffect, useState } from 'react'
import './NewCollections.css'

// import new_collection from "../Assets/new_collections"
import Item from '../Items/Item'
const NewCollections = () => {
  const [new_collection,setNew_collection]=useState([])


  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])
  return (
    <div className='newcollection'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {new_collection.map((item,i)=>{
                return  <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            })}
            
        </div>
    </div>
  )
}

export default NewCollections;
