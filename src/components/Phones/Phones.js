import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/api/productApi';
import AllCategory from '../AllCategory/AllCategory'
import Title from '../Home/Title/Title';
import './Phones.css'
const Phones = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const phone = products.filter(i => i.type === "phon")

  return (
    <div className='Phones'>
      <Title title='Phones :-' />
      <AllCategory products={phone} />
    </div>
  )
}

export default Phones