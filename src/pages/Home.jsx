import React from 'react'

// components
import Product from '../components/Product'

const Home = () => {
    return (
        <div>
            <section style={{ padding: '20px 35px'}}>
                <h3 style={{ margin: 10, color: 'skyblue' }}>Products</h3>
                <Product/>
            </section>
        </div>
    )
}

export default Home