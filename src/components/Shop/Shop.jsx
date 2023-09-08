import React, { useEffect, useState } from 'react'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step1 : get id
        for (const id in storedCart) {
            //step 2: get the Product using id
            const addedProduct = products.find(product => product.id === id)

            //step 3: Get quantity of product

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;

                //Step 4: add the product to the saved cart
                savedCart.push(addedProduct);
            }
            //step 5: Saved the cart
            setCart(savedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        //const newCart = [...cart, product];

        let newCart = [];

        // if priduct doesnot exist in the cart set the quantity=1
        // if exists update quantity by 1

        const exists = cart.find(pd => pd.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];

        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining=cart.filter(pd=>pd.id!==product.id)
            newCart=[...remaining,exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }


    return (

        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    )
}

export default Shop