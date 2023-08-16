import React from 'react';
import { FaTruck }  from 'react-icons/fa';

const Item = (props) => {
  return (
    <div className='item-wrapper'>
        <img 
        src={props.url}
        alt=''
        />
        <p className='shipment mb'><FaTruck /><span>ENVÍO GRATIS</span></p>
        <p className='price mb fw600'>$20.000</p>
        <div className='dues'>
            <p className='mb'>6 cuotas sin interes</p>
            <p className='fw600'>$3.466,67</p>
        </div>
    </div>
  )
}

export default Item
