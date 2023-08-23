import React, { useEffect, useState } from 'react';
import apiServer from '../services/server';
import { IKImage } from 'imagekitio-react';
import { Link } from 'react-router-dom';
import AddProduct from '../components/backoffice-components/AddProduct';
import { useDispatch } from 'react-redux';
import { getUserAction } from '../reducers/AuthReducer'
import getToken from '../helpers/UseGetToken';

const BackOffice = () => {
    const [ listProducts, setListProducts ] = useState([]);
    const [ listUsers, setListUsers ] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        const isAuthenticated = () => {
            dispatch(getUserAction())
        }

        isAuthenticated()
    },[])


    const handleProducts = async () => {
        
        const products = await apiServer.get('/product', getToken())
        setListProducts(products.data)
        setListUsers([])
    }

    const handleUsers = async () => {
        const users = await apiServer.get('/users', getToken())
        setListUsers(users.data)
        setListProducts([])
    }

    return (
        <div className='backoffice'>
            <header>
                <h1>Website administrator</h1>
                <Link to={"/"} className='link'>Back to site</Link>
            </header>
            <div className='content-seccion'>
                <div className='aside'>
                    <h2>CATEGORIES</h2>
                    <div>
                        <li onClick={handleProducts}>Products</li>
                        <li onClick={handleUsers}>Users</li>
                        <li>Oders</li>
                    </div>
                </div>
                <div className='section'>
                    <AddProduct />
                    {listProducts && 
                        listProducts.map((product) => (
                            product ? (
                                <div className='container'>
                                    <div className='content-img'>
                                        <IKImage path={product.image} className='img'/>
                                    </div>
                                    <div className='content-text'>
                                        <p className='list'>
                                            <span>Model: </span> {product.model} <br/> <span>Precio: </span> ${product.price.$numberDecimal} <br/> <span>Categoria: </span> {product.category}
                                        </p>
                                        <div className='btns'>
                                            <button className='btn'>Edit</button>
                                            <button className='btn'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        ))
                    }
                    {listUsers && 
                        listUsers.map((user) => (
                            user ? (
                                <div className='container'>
                                    <div className='content-text'>
                                        <p className='list'>
                                            <span>Nombre: </span> {user.name} - <span>Email: </span> {user.email} - <span>Telefono: </span> {user.phone} - <span>Rol: </span> {user.roleId === 1 ? "Admin" : "Usuario"}
                                        </p>
                                        <div className='btns'>
                                            <button className='btn'>Edit</button>
                                            <button className='btn'>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BackOffice