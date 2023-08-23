import React, { useEffect, useState } from 'react';
import Item from './Item';
import apiServer from '../services/server';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, loadProducts, selectProduct, unSelected } from '../reducers/ProductReducer';
import { IKImage } from 'imagekitio-react';


const ProductsMain = () => {
    const [isOpen, setIsOpen] = useState(false);
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
    }, [])

    return (
        <section className='product-wrapper'>
            <div className='products'>
                    {products && 
                        products.map((product) => 
                        product ? (
                            <div onClick={() => toggleItem(product.id)}>
                                <Item  model={product.model} url={product.image} price={product.price.$numberDecimal}/>
                            </div>
                            ): null
                        )    
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
                                <p>{product.category}</p>
                                <span>{product.price.$numberDecimal}</span>
                                <button>Agregar al carrito</button>
                            </div>
                        </div>
                    ) : null  
                    }
                </div>
        </section>
    )
}

export default ProductsMain