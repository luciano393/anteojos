import React from 'react';
import Carousel from '../components/Carousel';
import Benefits from '../components/Benefits';
import Categories from '../components/Categories';
import ProductsMain from '../components/ProductsMain';
import Logotype from '../components/Logotype';


const Inicio = () => {  

  return (
    <div className='page-wrapper'>
        <Carousel />
        <Benefits />
        <Categories />
        <ProductsMain />
        <Logotype />
    </div>
  )
}

export default Inicio