import React from 'react';
import CarWidget from './CarWidget';
import './NavBar.css';



function NavBar() {
    return (
        <div className = "Navbar">
            
            <nav className = "Nav">   
                    <ul className = "NavMenu">
                        <li><button className ="boton"><a href = "Inicio">Inicio</a></button></li>
                        <li><button className ="boton"><a href = "Productos">Productos</a></button></li>
                        <li><button className ="boton"><a href = "Nosotros">Nosotros</a></button></li>
                        <li><button className ="boton"><a href = "Contacto">Contacto</a></button></li>
                    </ul>
       
                
            </nav>
            
           <CarWidget/>
        </div>
        
    )
    
}


export default NavBar;
