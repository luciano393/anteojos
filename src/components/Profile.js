import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state) => state.auth.value);


  return (
    <div>
        <ul>Nombre: {user.name} - Email: {user.email} - Id de usuario: {user.id}</ul>
    </div>
  )
}

export default Profile