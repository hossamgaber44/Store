import React from 'react'
import './Rating.css'
const Rating = ({rating,reviews}) => {
  return (
    <div className='rating'>
             <span>
             Ratings :  {reviews}
           </span>
           <span>
             {rating} <i className="bi bi-star-fill"></i>
           </span>
        
        
    </div>
  )
}

export default Rating