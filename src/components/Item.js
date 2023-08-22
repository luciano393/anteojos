import { IKImage } from 'imagekitio-react';
import React from 'react';
import { FaTruck }  from 'react-icons/fa';

const Item = (props) => {
  return (
    <div className='item-wrapper'>
        <IKImage path={props.url}
        />
        <p className='shipment'><FaTruck /> Envios a todo el pais</p>
        <p className='description'>Modelo</p>
        <p className='price'>$20.000</p>
    </div>
  )
}

export default Item
