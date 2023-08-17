import React, { useEffect, useState } from 'react'
import Banner from './Banner/Banner'
import Category from './Category/Category'
import Offers from './Offers/Offers'
import Slider from './Slider/Slider'
import Title from './Title/Title'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/api/productApi'

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const Laptop = products.filter(i => i.type === "laptop")
  const phone = products.filter(i => i.type === "phon")
  return (
    <div>
      <Banner />
      <Category />
      <Title title=" Great offers for today" />
      <Offers />
      <Title title="The New Laptops" />
      <Slider data={Laptop} />
      <Title title="New Modern Phones" />
      <Slider data={phone} />
    </div>
  )
}

export default Home