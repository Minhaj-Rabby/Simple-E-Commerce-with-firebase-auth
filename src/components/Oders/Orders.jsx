import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import { useLoaderData } from 'react-router-dom'
import ReviewItem from '../ReviewItem/ReviewItem';
import './Ordera.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard} from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }
  const handleclearFromCart = () => {
    setCart([]);
    deleteShoppingCart();
  }

  return (

    <div className='shop-container'>
      <div className='review-container'>
        {
          cart.map(product => <ReviewItem
            key={product.id}
            product={product}
            handleRemoveFromCart={handleRemoveFromCart}
          >
          </ReviewItem>)
        }
      </div>
      <div className='review-cart-container'>
        <Cart cart={cart}
          handleclearFromCart={handleclearFromCart}
        >
          <Link  className='proceed-link' to="/checkout">
            <button className='btn-proceed' >
            Proceed Checkout
              <FontAwesomeIcon className='clear-icon' icon={faCreditCard} />
            </button>
          </Link>
        </Cart>
      </div>

    </div>
  )
}

export default Orders