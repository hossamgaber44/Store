import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/api/productApi';
import AllCategory from '../AllCategory/AllCategory'
import Title from '../Home/Title/Title';
import './Accessoires.css'
const Accessoires = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const Accessoires = products.filter(i => i.type === "accessoires")
  return (
    <div className='Accessoires'>
      <Title title='Accessoires :-' />
      <AllCategory products={Accessoires} />
    </div>
  )
}


export default Accessoires