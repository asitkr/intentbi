import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        address: '',
        paymentMethod: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formValue.name && formValue.email && formValue.address && formValue.paymentMethod) {
            localStorage.setItem('user checkout', JSON.stringify(formValue));
            setFormValue('')
            navigate('/congrats')
        }

        if(formValue.name && formValue.email && formValue.address && formValue.paymentMethod) {
            localStorage.clear();
        }
    }

    console.log(formValue)

    return (
        <div className='checkout__wrapper'>
            <form onSubmit={handleSubmit} className='form__checkout'>

                <h1 style={{color: '#fff', textAlign: 'center', padding: '8px 0'}}>Checkout</h1>

                <div className='fields'>
                    <label>Name:</label>
                    <input type="text" name='name' onChange={handleChange} />
                </div>

                <div className='fields'>
                    <label>Email:</label>
                    <input type="email" name='email' onChange={handleChange} />
                </div>
                
                <div className='fields'>
                    <label>Address:</label>
                    <textarea name='address' onChange={handleChange} />
                </div>

                <div className='fields'>
                    <label>Payment Method:</label>
                    <select name='paymentMethod' onChange={handleChange}>
                        <option>Choose payment method</option>
                        <option value="credit-card">Credit Card</option>
                        <option value="debit-card">Debit Card</option>
                        <option value="Net Banking">Net Banking</option>
                        <option value="UPI">UPI</option>
                    </select>
                </div>

                <div className="fields">
                    <button type="submit" className='place__order__btn'>Place Order</button>
                </div>
            </form>
        </div>
    )
}

export default Checkout