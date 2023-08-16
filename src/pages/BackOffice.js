import React, { useEffect, useState } from 'react'
import apiServer from '../services/server'

const BackOffice = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const exec = async () => {
            try {
                const response = await apiServer.get("http://localhost:9000/api/users")
                setUsers(response.data)
            } catch (e){
                console.log(e)
            }
        }
        exec();
    }, [])

    return (
        <div className='page-wrapper'>
            <h1>Usuarios</h1>
            {users && 
                users.map((user) => 
                    user ? (
                        <div>
                            <p>Nombre de usuario: {user.name} Email: {user.email} Phone: {user.phone} Password: {user.password}</p>
                        </div>
                    ) : null
                ) 
            }
            
        </div>
    )
}

export default BackOffice