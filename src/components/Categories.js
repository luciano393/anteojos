import React from 'react';
import Img from '../assets/anteojosrecetados.jpg';
import Img2 from '../assets/anteojossol.jpg';
import Img3 from '../assets/lentescontacto.jpg';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories-wrapper'>
        <Link to={'/anteojosrecetados'} className='category'>
            <img src={Img} alt='Anteojos recetados'/>
        </Link>
        <Link to={'/anteojosdesol'} className='category ml'>
            <img src={Img2} alt='Anteojos de sol'/>
        </Link>
        <Link to={'/lentesdecontacto'} className='category ml'>
            <img src={Img3} alt='Lentes de contacto'/>
        </Link>
    </div>
  )
}

export default Categories
