import React from 'react'
import './Category.css'
import db from '../../../data/db.json'
const {categories}=db;
const Category = () => {
  return (
    <div className='categories'>
        <div className='container'>
            <div className='categories-content'>
                {categories.map((i)=>(
                    <div key={i.id} className='category'>
                        <div className='category-img'>
                            <img src={i.image} />
                        </div>
                        <div className='category-title'>
                            <h3>{i.title} </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category