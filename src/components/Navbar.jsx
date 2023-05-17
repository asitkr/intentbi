import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const items = useSelector(state => state.cart)

    const product__number = localStorage.getItem('cart num');

    return (
        <div className='navbar'>
            <h3><Link to={'/'} className='link'>Online Store</Link></h3>
            <div>
                <Link to={'/'} className='link'>Home</Link>
                <Link to={'/cart'} className='link'>
                    Cart &nbsp;
                    <span className='cartCount'>{product__number}</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;