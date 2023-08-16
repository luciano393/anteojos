import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUserAction } from '../reducers/AuthReducer';
import { useNavigate } from 'react-router-dom';

const PreviewProfile = () => {
    const user = useSelector((state) => state.auth.value)
    const dispatch = useDispatch();
    const history = useNavigate();

    const Logout = () => {
        dispatch(removeUserAction())
        const refreshPage = () => {
            history(0);
        }
        refreshPage()
    }

    return (
        <div className='preview-profile'>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button className='btn' onClick={Logout}>
                Cerrar Sesión
            </button>
        </div>
    ) 
}

export default PreviewProfile