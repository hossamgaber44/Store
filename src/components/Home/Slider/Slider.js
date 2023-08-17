import React, { useState } from 'react'
import Rating from '../Rating/Rating'
import './Slider.css'
import { Link } from 'react-router-dom'
const Slider = (data) => {
  const product = data.data
  const [slidIndex, setSlidIndex] = useState(0)
  const handelClick = (direction) => {
    if (direction === "left") {
      setSlidIndex(slidIndex - 1)
    } else {
      setSlidIndex(slidIndex + 1)
    }
  }
  return (
    <div className='Slider'>
      <button
        disabled={slidIndex === -1}
        onClick={() => handelClick("left")} className="fa-solid fa-arrow-left arrow-left"
      ></button>
      <div className='slide-container'>
        {product.map((i) => (
          <Link to={`/SingleProduct/${i.id}`} key={i.id} className='slide-content' style={{ transform: `translate(${slidIndex * -250}px)` }}>
            <div className='slide-img'>
              <img src={i.image} />
            </div>
            <div className='slide-info'>
              <div className='slide-info-title'>
                <h3>{i.title}</h3>
              </div>
              <Rating rating={i.rating} reviews={i.reviews} />
              <h3 className='price'><b>${i.price}</b></h3>
            </div>
          </Link>
        ))}
      </div>
      <button
        disabled={slidIndex === (product.length) - 1}
        onClick={() => handelClick("right")} className="fa-solid fa-arrow-right arrow-right"></button>
    </div>
  )
}

export default Slider