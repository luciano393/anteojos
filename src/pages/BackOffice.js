import React, { useState } from 'react';
import apiServer from '../services/server';
import { IKImage } from 'imagekitio-react';

const BackOffice = () => {
    const [ listProducts, setListProducts ] = useState([]);
    const [ listUsers, setListUsers ] = useState([]);

    const handleProducts = async () => {
        const products = await apiServer.get('http://localhost:9000/product/')
        setListProducts(products.data)
        setListUsers([])
    }

    const handleUsers = async () => {
        const users = await apiServer.get('http://localhost:9000/users/')
        setListUsers(users.data)
        setListProducts([])
    }

    return (
        <div className='page-wrapper backoffice'>
            <div className='aside'>
                <h1>Admin</h1>
                <div>
                    <h3>Products:</h3>
                    <li onClick={handleProducts} className='aside__item'>List</li>
                    <li>Add Product</li>
                </div>
                <div>
                    <h3>Users:</h3>
                    <li onClick={handleUsers} className='aside__item'>List</li>
                    <li>Add User</li>
                </div>
                <div>
                    <h3>Oders:</h3>
                    <li>List</li>
                    <li>Update Order</li>
                </div>
            </div>
            <div className='content'>
                {listProducts && 
                    listProducts.map((product) => (
                        product ? (
                            <div>
                                <p className='list'>
                                    <span>Model: </span> {product.model} - <span>Precio: </span> ${product.price.$numberDecimal} - <span>Categoria: </span> {product.category} - <span>Imagen: </span> <IKImage path={product.image}/>
                                </p>
                                <div className='btns'>
                                    <button className='btn'>Edit</button>
                                    <button className='btn'>Delete</button>
                                </div>
                            </div>
                        ) : null
                    ))
                }
                {listUsers && 
                    listUsers.map((user) => (
                        user ? (
                            <div>
                                <p className='list'>
                                    <span>Nombre: </span> {user.name} - <span>Email: </span> {user.email} - <span>Telefono: </span> {user.phone} - <span>Rol: </span> {user.roleId === 1 ? "Admin" : "Usuario"}
                                </p>
                                <div className='btns'>
                                    <button className='btn'>Edit</button>
                                    <button className='btn'>Delete</button>
                                </div>
                            </div>
                        ) : null
                    ))
                }
            </div>
        </div>
    )
}

export default BackOffice