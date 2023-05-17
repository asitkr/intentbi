import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

// components
import { remove } from '../redux-toolkit/cartSlice';

const Cart = () => {

    const items = useSelector(state => state.cart);
    const dispatch = useDispatch()

    // const cart_product = localStorage.getItem('cart product');
    // console.log(cart_product)

    const handleRemove = (ItemID) => {
        dispatch(remove(ItemID))
    }

    return (
        <div style={{ padding: '20px 35px'}}>
            <h3 style={{ margin: 10, color: 'skyblue' }}>Cart</h3>
            <div className="cartWrapper">
                {
                    items.length > 0 ? (items.map((item) => {
                        return (
                            <div className="cartCard" key={item.id}>
                                <img src={item.image} alt="cart" className='cart__image' />
                                <h5>{item.title}</h5>
                                <h5>₹ {item.price}</h5>
                                <button onClick={()=>handleRemove(item.id)} className='remove__btn'>Remove</button>
                            </div>
                        )
                    })) : (
                        <h1 
                            style={{ 
                                textAlign: 'center', 
                                margin: '20px', 
                                color: 'skyblue'
                            }}
                        >
                            No items added
                        </h1>
                    )
                }

                {
                    items.length > 0 &&
                    <>
                        <div className='cartCard'>
                            <Link to={'/checkout'}>
                                <button className='checkout__btn'>Checkout</button>
                            </Link>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Cart;