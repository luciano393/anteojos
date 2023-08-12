import React, {useEffect, useState} from 'react';
import Hamburger from 'hamburger-react';
import { IoCart, IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setOpen] = useState(false);

    const toggleNav = () => {
        setOpen(!isOpen);
    };

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
            </div>
            {(isOpen || screenWidth > 700) && (
                <div className='sidebar'>
                    <Link to={`/`} className='sidebar__item' onClick={toggleNav}>INICIO</Link>
                    <Link to={`/anteojosdesol`} className='sidebar__item' onClick={toggleNav}>ANTEOJOS DE SOL</Link>
                    <Link to={`/anteojosrecetados`} className='sidebar__item' onClick={toggleNav}>ANTEOJOS RECETADOS</Link>
                    <Link to={`/kids`} className='sidebar__item' onClick={toggleNav}>NIÑOS</Link>
                    <Link to={`/politica`} className='sidebar__item' onClick={toggleNav}>POLITICAS</Link>
                    <Link to={`/contacto`} className='sidebar__item' onClick={toggleNav}>CONTACTO</Link>
                </div>
            )}
        </div>
    )
}

export default Navbar