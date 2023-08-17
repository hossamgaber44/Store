import React, { useEffect, useState } from 'react'
import './SpecialOffer.css'
import { useParams } from 'react-router-dom'
import db from '../../../data/db.json'
import Rating from '../../Home/Rating/Rating'
import { addCart } from '../../../redux/api/cartApi'
import { useDispatch } from 'react-redux'
const { specialOffers } = db
const SpecialOffer = () => {
    const { id } = useParams()
    const product = specialOffers.find((i) => i.id === +id)
    const { title, images, price, discount, rating, reviews } = product
    const [imgIndex, setImgIndex] = useState(0);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id]);

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(
            addCart({
                id: id,
                price: price,
                title: title,
                image: images[0],
                qut: qty,
            })
        )
    }
    return (
        <div className='SpecialOffer'>
            <div className='SpecialOffer-container'>
                <div className='special-offer-content'>
                    <div className='special-offer-images'>
                        <div className='offer-imags-parent'>
                            {images.map((source, index) => (
                                <div onClick={() => setImgIndex(index)} key={index} className='select-img'>
                                    <img src={source} />
                                </div>
                            ))}
                        </div>
                        <div className='first-img'>
                            <img src={images[imgIndex]} />
                        </div>

                    </div>
                    <div className='special-offer-info'>
                        <h2>{title}</h2>
                        <Rating rating={rating} reviews={reviews} />
                        <div className='price'>
                            <b><span className='old-price'>${price}</span> <span>${price - (price * discount) / 100}</span></b>
                        </div>
                        <h3>الكميه</h3>
                        <div className='addcategory'>
                            <input onClick={e => setQty(e.target.value)} min="1" max="8" type='number' defaultValue={qty} />
                            <button onClick={addToCart}>اضافه الي السله</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer