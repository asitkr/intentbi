import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// components
import { STATUSES, fetchProducts } from '../redux-toolkit/productSlice';
import { add } from '../redux-toolkit/cartSlice';

const Product = () => {

    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.product)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    // Loader for success and fails
    if(status === STATUSES.LOADING){
        return <h2>Loading ......</h2>
    }
    if(status === STATUSES.ERROR){
        return <h2>Something went Wrong .......</h2>;
    }

    return (
        <div className="products">
            {
                products.map((product) => {
                    return(
                        <div className="cartCard" key={product.id}>
                            <img src={product.image} alt="" className='productImage' />
                            <h4>{product.title}</h4>
                            <h5>₹ {product.price}</h5>
                            <button onClick={() => handleAdd(product)} className='add__to__cart'>Add to cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Product