import React, { useEffect, useState } from 'react';
import Item from './Item';
import apiServer from '../services/server';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, selectProduct, unSelected } from '../reducers/ProductReducer';
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
            await apiServer
                .get("http://localhost:9000/product")
                .then((res) => {
                    if(res.status === 200) {
                        dispatch(loadProducts(res.data));
                    } else {
                        console.log("No hay productos para mostrar");
                    }
                })
                .catch((e) => {
                    console.log(e)
                    console.log("Error de servidor");
                })
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
                                <Item url={product.image}/>
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