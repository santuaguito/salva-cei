import React from 'react';
import { NavLink } from 'react-router-dom';
import CarWidget from './CarWidget';
import './NavBar.css';



function NavBar() {
    return (
        <div className = "Navbar">
            
            <nav className = "Nav">   
                    <ul className = "NavMenu">
                        <li><button className ="boton"> <NavLink to="/Inicio">Inicio</NavLink></button></li>
                        <li><button className ="boton"><NavLink to="/Item" >Productos</NavLink></button></li>
                        <li><button className ="boton"> <NavLink to ="/Nosotros">Nosotros</NavLink> </button></li>
                        <li><button className ="boton"><NavLink to="/Contacto">Contacto</NavLink></button></li>
                    </ul>
       
                
            </nav>
            
           <CarWidget/>
        </div>
        
    )
    
}


export default NavBar;
