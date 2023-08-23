import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Item from '../components/Item';
import { IKImage } from 'imagekitio-react';
import { getProducts } from '../reducers/ProductReducer';
import { selectProduct, unSelected } from '../reducers/ProductReducer';

const Category = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const category = ["Anteojos de sol", "Anteojos recetados", "Lentes de contacto", "kids"]
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)
  const product = useSelector((state) => state.product.selected)

  const toggleItem = (id) => {
      if(!isOpen) {
          dispatch(selectProduct(id))
          setIsOpen(!isOpen)
      } else {
          dispatch(unSelected())
          setIsOpen(!isOpen)
      }  
  }

  useEffect(() => {
      const exec = async () => {
          dispatch(getProducts())
      }
      exec()
  }, [dispatch])

  return (
      <div className='page-wrapper'>
          <section className='product-wrapper'>
            <div className='products'>
                    {products.find(element => element.category === props.category) ? 
                    products.map((product) => 
                    product.category === props.category ? (
                        <div onClick={() => toggleItem(product.id)}>
                            <Item model={product.model} url={product.image} price={product.price.$numberDecimal}/>
                        </div>
                        ): null
                    ) :
                    <div className='ups'>
                        <h4>No se han encontrado productos en esta categoria...</h4>
                    </div>      
                    }
            </div>
            <div className={`selection ${isOpen ? 'open-item' : 'close item'}`}>
                    <div className='close' onClick={toggleItem}>
                        x
                    </div>
                    {product.id ? (
                        <div className='info'>
                            <div className='content-img'>
                                <IKImage path={product.image} alt=' ' className='img'/>
                            </div>
                            <div className='content-text'>
                                <h2>{product.model}</h2>
                                <p>{props.category === "category-1" ? category[0] : 
                                    props.category === "category-2" ? category[1] :
                                    props.category === "category-3" ? category[2] :
                                    props.category === "category-4" ? category[3] :
                                    null
                                    }</p>
                                <span>{product.price.$numberDecimal}</span>
                                <button>Agregar al carrito</button>
                            </div>
                        </div>
                    ) : null  
                    }
                </div>
        </section>
      </div>
    )
}

export default Category
