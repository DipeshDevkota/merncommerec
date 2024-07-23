import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams}  from 'react-router-dom'
import Breadcrums from '../components/Assets/Breadcrums/Breadcrums'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Description from '../components/Description/Description'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'
const Product = () => {
  const {all_product} =useContext(ShopContext);
  const {productId}= useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
     <ProductDisplay product={product}/>
     <Description  />
     <RelatedProducts/>
    </div>
  )
}

export default Product
