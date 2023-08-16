import React from 'react';
import Carousel from '../components/Carousel';
import Benefits from '../components/Benefits';
import Categories from '../components/Categories';
import ProductsMain from '../components/ProductsMain';



const Main = () => {
  return (
    <div className='page-wrapper'>
        <Carousel />
        <Benefits />
        <Categories />
        <ProductsMain />
    </div>
  )
}

export default Main