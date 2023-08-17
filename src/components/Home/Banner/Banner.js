import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <div className='container'>
          <div className='banner-content'>
            <div className='banner-img'>
              <img src="/images/banners/computer2.jpeg"/>
          </div>
          <div className='banner-img'>
              <img src="/images/banners/computer.jpeg"/>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Banner