import React, { useEffect, useState } from 'react';
import { FaTruck } from 'react-icons/fa';

const Benefits = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
        <div className='benefits-wrapper'>
            <div className='benefits__item'>
                <div className='benefits__item-icon'>
                    <FaTruck className='icon'/>
                </div>
                <div className='benefits__item-text'>
                    <h4>ENVIAMOS TU COMPRA</h4>
                    <p>Entregas a todo el país</p>
                </div>
            </div>
            {(screenWidth > 800) && (
                <div className='benefits__item bl'>
                    <div className='benefits__item-icon'>
                        <FaTruck className='icon'/>
                    </div>
                    <div className='benefits__item-text'>
                        <h4>ENVIAMOS TU COMPRA</h4>
                        <p>Entregas a todo el país</p>
                    </div>
                </div>
            )}
            {(screenWidth > 800) && (
                <div className='benefits__item bl'>
                    <div className='benefits__item-icon'>
                        <FaTruck className='icon'/>
                    </div>
                    <div className='benefits__item-text'>
                        <h4>ENVIAMOS TU COMPRA</h4>
                        <p>Entregas a todo el país</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Benefits