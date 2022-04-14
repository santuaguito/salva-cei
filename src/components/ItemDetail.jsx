import {useState} from 'react'
import ItemCount from './ItemCount';
import '../components/ItemListContainer.css';
import {useLocation, Link} from 'react-router-dom';    
import useCartContext from './CartContext';

const ItemDetail = ({}) =>{
    const stock = product.Stock;
    const [add, setAdd] = useState (false)
    const initial = 1
    const [quantity, setQuantity] = useState(1);
    const {addProduct} = useCartContext()

    const productQuantity = (count) => {
        setQuantity(count)
    }

    const addToCart = () => {
        addProduct(product, quantity)
        setAdd(true)
    }

    const [cart, setCart] = useState(false)
    const onAdd =()=> {
        setCart (true)
    }

    const {state} = useLocation();
    const {product} = state || {}; 
    
    console.log(product);

    return product ? (
        <div className="card2">
            <p>{product.Imagen}</p>
            <p>{product.Descripcion}</p>
            <p>{product.Stock}</p>
            <ItemCount Stock = {stock}
            initial ={initial}
            onAdd={productQuantity} />

            <button className="btn" onClick={addToCart}>Agregar al Carrito</button>
            {add ? <Link to= {'/cart'}><button className="btn">Comprar Ahora</button></Link> : null}
        
        </div>
    ) : "Error";
}

export default ItemDetail;