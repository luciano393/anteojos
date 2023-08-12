import React, {useEffect, useState} from 'react';
import Hamburger from 'hamburger-react';
import { IoCart } from 'react-icons/io5';

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
            <div className="hamburger-btn" onClick={toggleNav}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
            </div>
            <div className='logo'>
                <h2>ANTEOJOS OLIVER</h2>
            </div>
            <div className='cart'>
                <IoCart/>
            </div>
        </div>
    )
}

export default Navbar