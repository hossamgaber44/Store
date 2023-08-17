import React from 'react'
import './Offers.css'
import db from '../../../data/db.json'
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';
const offers =db.specialOffers;
const Offers = () => {
  return (
    <div className='offers'>
        <div className='container'>
            <div className='offers-content'>
                {offers.map((i)=>(
                    <div key={i.id} className='offer'>
                        <div className='offer-img'>
                            <img src={i.firstImage}/>
                            <img src={i.scondImage}/>
                        </div>
                        <h3>{i.title}</h3>
                        <Rating rating={i.rating} reviews={i.reviews} />
                        <div className='price'>
                            <b><span className='old-price'>${i.price}</span> <span>${i.price - (i.price * i.discount )/100}</span></b>
                        </div>
                        <Link className='offer-btn' to={`/SpecialOffer/${i.id}`}>Learn More</Link>
                        <span className='discount'>Even discount <b>%{i.discount}</b></span>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Offers