import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { img, name, price, seller, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="product" />
            <div className='product-info'>
                <h6 className='product-name'>Name:{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p className='manufacturer'> Manufacturer: {seller}</p>
                <p className='rating'> Rating: {ratings} Star</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    )
}

export default Product