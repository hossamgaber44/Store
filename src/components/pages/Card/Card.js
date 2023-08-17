import React, { useEffect } from 'react'
import './Card.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeCart } from '../../../redux/api/cartApi'
import { Link } from 'react-router-dom'
const Card = () => {
  const { CardItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    CardItems.length < 1 ?
      <div className='embty-card'>
        <h2> Your cart is empty</h2>
        <h3> There are no items</h3>
        <Link to="/"> Commodity page</Link>
      </div>
      :
      <div className='Card'>
        <div className='container'>
          <div className='card-content'>
            <div className='card-items'>
              <h1 className='card-title'> Shopping basket</h1>
              {CardItems.map((i) => (
                <div key={i.id} className='card-item'>
                  <div className='card-image'>
                    <img src={i.image} />
                  </div>
                  <div className='card-info'>
                    <h2>{i.title}</h2>
                    <h3> Quantity : {i.qut}</h3>
                    <h3> price : ${i.price * i.qut}</h3>
                  </div>
                  <i onClick={() => dispatch(removeCart(i.id))} className="fa-solid fa-trash cart-delete"></i>
                </div>
              ))}
            </div>
            <div className='card-price'>
              <div className="cart-price-text">
                <i className="fa-solid fa-circle-check"></i>
                Part of your order qualifies for free shipping.  Select this option when paying
                Details
              </div>
              <h2>total  : <b>$</b>{CardItems.reduce((acc, cur) => acc + cur.price * cur.qut, 0)}</h2>
            </div>
          </div>
        </div>

      </div>
  )
}

export default Card