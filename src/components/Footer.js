import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='nav'>
        <h3 className='footer__title'>NAVEGACIÓN</h3>
        <Link to={`/`} className='nav__items'>INICIO</Link>
        <Link to={`/anteojosdesol`} className='nav__items'>ANTEOJOS DE SOL</Link>
        <Link to={`/anteojosrecetados`} className='nav__items'>ANTEOJOS RECETADOS</Link>
        <Link to={`/kids`} className='nav__items'>NIÑOS</Link>
        <Link to={`/politica`} className='nav__items'>POLITICAS</Link>
        <Link to={`/contacto`} className='nav__items'>CONTACTO</Link>
      </div>
      <div className='contact'>
        <h3 className='footer__title'>CONTACTANOS</h3>
        <p>Telefono</p>
        <p>Email</p>
        <p>Ubicación</p>
      </div>
      <div className='social'>
        <h3 className='footer__title'>REDES SOCIALES</h3>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
    </div>
  )
}

export default Footer