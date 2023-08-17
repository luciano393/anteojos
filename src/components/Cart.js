import React, { useState } from 'react'

const Cart = (props) => {
    const [openCar, setOpenCar] = useState(false);

    const toggleCar = () => {
        setOpenCar(!openCar)
    }

    return (
        <div className={`car-shop ${props.className}`}>
            <header>
                <h2>Carrito de compras</h2>
                <div className='close' onClick={toggleCar}>x</div>
            </header>
            <div className='categorys'>
                <h5>PRODUCTO</h5>
                <h5>SUBTOTAL</h5>
            </div>
            <div className='content'>

            </div>
        </div>
    )
}

export default Cart