import React, { useEffect, useState } from 'react';
import Item from './Item';
import { useSearchParams } from 'react-router-dom';
import apiServer from '../services/server';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../reducers/ProductReducer';


const ProductsMain = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)
    const toggleItem = () => {
        setIsOpen(!isOpen)
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
                            <div onClick={toggleItem}>
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
                    <div className='info'>
                        <div className='content-img'>
                            <h1>imagen</h1>
                        </div>
                        <div className='content-text'>
                            <h2>Modelo</h2>
                            <p>Description</p>
                            <span>Precio</span>
                            <button>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default ProductsMain