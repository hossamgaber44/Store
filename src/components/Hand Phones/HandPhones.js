import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/api/productApi';
import AllCategory from '../AllCategory/AllCategory'
import Title from '../Home/Title/Title';
import './HandPhones.css'
const HandPhones = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.product);

   useEffect(() => {
    dispatch(fetchProducts());
  },[]);

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);

  const HandPhones = products.filter(i => i.type ==="handPhones")
  return (
    <div className='HandPhones'>
        <Title title='HandPhones :-' />
        <AllCategory products={HandPhones} />
    </div>
  )
}

export default HandPhones