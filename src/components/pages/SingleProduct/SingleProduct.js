import React ,{useState,useEffect} from 'react'
import './SingleProduct.css'
import { useParams } from 'react-router-dom'
import Rating from '../../Home/Rating/Rating'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchProductsById } from '../../../redux/api/productApi'
import { addCart } from '../../../redux/api/cartApi'
const SingleProduct = () => {
    const {id}=useParams();
    const dispatch = useDispatch();
    const {product} =useSelector((state)=>state.product);
    const [qty,setQty] =useState(1);

  useEffect(() => {
    dispatch(fetchProductsById(id));
    window.scrollTo(0,0)
  },[id]);

  const addToCart =()=>{
    dispatch(
        addCart({
            id : product?.id, 
            price : product?.price ,
            title : product?.title ,
            image : product?.image,
            qut : qty,
        })
    )
  }
  return (
    <div className='SingleProduct'>
        <div className='SingleProduct-container'>
            <div className='single-product-content'>
                <div className='img'>
                    <img src={product?.image}/>
                </div>
                <div className='single-product-info'>
                        <h5 className='brand'>brand : {product?.brand}</h5>
                        <h2>{product?.title}</h2>
                        <h4 className='data'>{product?.data}</h4>
                        <Rating rating={product?.rating} reviews={product?.reviews} />
                        <div className='single-product-price'>
                            <b>${product?.price}</b>
                        </div>
                        <h3>Quantity : </h3>
                        <div className='addcategory'>
                            <input defaultValue={qty} onClick={e => setQty(e.target.value)} min="1" max="8" type='number' />
                            <button onClick={addToCart} >Add to Cart</button>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default SingleProduct