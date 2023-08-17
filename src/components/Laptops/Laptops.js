import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/api/productApi';
import AllCategory from '../AllCategory/AllCategory'
import Title from '../Home/Title/Title';
import './Laptops.css'
const Laptops = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const Laptop = products.filter(i => i.type === "laptop")
  return (
    <div className='Laptops'>
      <Title title='Laptops :-' />
      <AllCategory products={Laptop} />
    </div>
  )
}

export default Laptops