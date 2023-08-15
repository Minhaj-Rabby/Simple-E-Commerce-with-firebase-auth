import React from 'react'
import './Product.css'
const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="product" />
            <div className='product-info'>
                <h6 className='product-name'>Name:{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p className='manufacturer'> Manufacturer: {seller}</p>
                <p className='rating'> Rating: {ratings} Star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    )
}

export default Product