import {useState} from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import StoreContext from './CartContext';


const Cart = () => {
    const {products, removeItem, totalProductsPrice, cleanListCart} = useContext(StoreContext)
    const [showForm, setShowForm] = useState(false)
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState(false)
    
    const handleRemove = (i) => {
        removeItem(i.id)
    }
    
    const handleFinalize = () =>{
        setShowForm(true)
    }



}

export default Cart;