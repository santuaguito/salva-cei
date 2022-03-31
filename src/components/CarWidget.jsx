import React from 'react'
import './CarWidget.css'
import CartLogo from './Img/carrito.png';


function CarWidget() {
    return (
        <div>
            <img src={CartLogo} alt="Imagen carrito" className ="Cart"/>
        </div>
    )
}

export default CarWidget