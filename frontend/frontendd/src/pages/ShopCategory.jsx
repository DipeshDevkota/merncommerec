import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png';
import Item from '../components/Items/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    // Log the entire all_product array
    console.log('All props:', props);
    

    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            {console.log("Props=", props.banner)}
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12 </span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product && all_product.length > 0 ? (
                    all_product.map((item) => {
                        // Log each item to inspect its properties
                        // console.log('Product Item:', item);

                        // // Log the category being checked
                        // console.log('Checking Category:', props.category, 'Product Category:', item.category);
                          console.log(props.category.trim().toLowerCase()==item.category.trim().toLowerCase());
                        if(props.category.trim().toLowerCase() === item.category.trim().toLowerCase())
                             {
                            
                            console.log(item.image);
                            

                            return (
                                <Item
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                />
                            );
                        }
                    return null;
                    })
                ) : (
                    <p>No products available.</p>
                )}
            </div>
            <div className="shopcategory-loadmore">VIEW MORE</div>
        </div>
    );
};

export default ShopCategory;
