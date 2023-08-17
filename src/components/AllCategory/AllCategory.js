import React, { useEffect, useState } from 'react'
import './AllCategory.css'
import { Link } from 'react-router-dom';
import Rating from '../Home/Rating/Rating';
const AllCategory = ({ products }) => {
  const [data ,setData]=useState(products) 
  const filter = (e) => {
    setData(products.filter(i=>i.title.toLowerCase().includes(e.target.value.toLowerCase())))
  }
  return (
    <div className='AllCategory'>
      <div className='container'>
        <div className='search-input'>
          <input onChange={filter} type='text' placeholder='Enter data On Search...' />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className='AllCategory-content'>
          {data.map(i => (
            <Link to={`/SingleProduct/${i.id}`} key={i.id} className='Category'>
              <div className='category-image'>
                <img src={i.image} />
              </div>
              <div className='category-info'>
                <h3 className='category-title'>{i.title}</h3>
                <Rating rating={i.rating} reviews={i.reviews} />
                <b className='category-price'><span>${i.price}</span></b>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllCategory