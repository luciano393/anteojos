import React, {useCallback, useEffect, useState} from 'react';
import Hamburger from 'hamburger-react';
import { IoCart, IoSearch, IoPeople } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PreviewProfile from './PreviewProfile';
import { getUserAction, removeUserAction } from '../reducers/AuthReducer';
import getToken from '../helpers/UseGetToken';
import { IsAuthenticated } from '../helpers/IsAuthenticated';

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setOpen] = useState(false);
    const [isToggle, setIsToggle] = useState(false);
    const user = useSelector((state) => state.auth.value)
    const dispatch = useDispatch();
    const history = useNavigate();

    const toggleUser = () => {
        setIsToggle(!isToggle)
    }

    const toggleNav = () => {
        setOpen(!isOpen);
    };

    const Logout = () => {
        toggleNav()
        dispatch(removeUserAction())
        const refreshPage = () => {
            history(0);
        }
        refreshPage()
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    return (
        <div className='navbar-wrapper'>
            <div className='header'>
                <div className="hamburger-btn" onClick={toggleNav}>
                    <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
                </div>
                <div className='search'>
                    <IoSearch />
                </div>
                <div className='logo'>
                    <h2>ANTEOJOS OLIVER</h2>
                </div>
                <div className='cart'>
                    <IoCart/>
                </div>
                {(!user && screenWidth > 800) && (
                <div className='autentication-700'>
                    <Link to={'/register'} className='autentication-700__item br'>Crear cuenta</Link>
                    <Link to={'/login'} className='autentication-700__item'>Iniciar sesión</Link>
                </div>  
                )}
                {(user && screenWidth > 800) && (
                    <IoPeople cursor={"pointer"} className='user' onClick={toggleUser}/>
                )} 
                {(isToggle) && (
                    <PreviewProfile />
                )}
            </div>
                <div className={`sidebar ${isOpen || screenWidth > 780 ? 'show' : 'close'}`}>
                    <div className='sidebar__nav'>
                        <Link to={`/`} className='sidebar__item' onClick={toggleNav}>INICIO</Link>
                        <Link to={`/anteojosdesol`} className='sidebar__item' onClick={toggleNav}>ANTEOJOS DE SOL</Link>
                        <Link to={`/anteojosrecetados`} className='sidebar__item' onClick={toggleNav}>ANTEOJOS RECETADOS</Link>
                        <Link to={`/lentesdecontacto`} className='sidebar__item' onClick={toggleNav}>LENTES DE CONTACTO</Link>
                        <Link to={`/kids`} className='sidebar__item' onClick={toggleNav}>NIÑOS</Link>
                        <Link to={`/politica`} className='sidebar__item' onClick={toggleNav}>POLITICAS</Link>
                        <Link to={`/contacto`} className='sidebar__item' onClick={toggleNav}>CONTACTO</Link>
                    </div>
                    {!user 
                    ? 
                    <div className='sidebar__autentication'>
                        <IoPeople />
                        <Link to={'/register'} className='autentication br' onClick={toggleNav}>Crear cuenta</Link>
                        <Link to={'/login'} className='autentication' onClick={toggleNav}>Iniciar sesión</Link>
                    </div> 
                    : 
                    <div className='sidebar__autentication'>
                        <IoPeople/>
                        <Link to={'/profile'} className='autentication br' onClick={toggleNav}>Perfil</Link>
                        <Link to={'/'} className='autentication br'>Back-office</Link>
                        <Link className='autentication' onClick={Logout}>Cerrar sesión</Link>
                    </div>
                    }
                </div>
        </div>
    )
}

export default Navbar