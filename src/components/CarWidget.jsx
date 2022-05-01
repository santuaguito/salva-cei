import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './CarWidget.css'
import StoreContext from './CartContext';   
import {Link} from 'react-router-dom'


const CarWidget = () => {
    const{cartWidgetCount} = useContext (StoreContext)

    return (
        <div>
            <Link to= {'/Cart'} >
                <div className='cart-icon'>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                    <span className="items">{cartWidgetCount()}</span>

                </div>
            
            
            
            
            </Link>



            
        </div>
    )
}

export default CarWidget