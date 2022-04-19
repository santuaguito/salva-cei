import {useState, useContext} from 'react'
import ItemCount from './ItemCount';
import '../components/ItemListContainer.css';
import {Link} from 'react-router-dom';
import StoreContext from './CartContext';   

const ItemDetail = ({product}) =>{
    const stock = product.Stock;
    const [add, setAdd] = useState (false)
    const initial = 1
    const [quantity, setQuantity] = useState(1)
    const addProduct = useContext(StoreContext)

    const productQuantity = (count) => {
        setQuantity(count)
    }

    const addToCart = () => {
        addProduct(product, quantity)
        setAdd(true)
    }

    
   

    return product ? (
        <div className="card2">
            <img width="250" height="250" src ={product.Imagen} alt="Sin imagen"></img>
            <p>{product.Descripcion}</p>
            <p> {product.Stock}</p>
            <ItemCount Stock = {stock}initial ={initial}onAdd={productQuantity} />
            {add ? <Link to= {'/cart'}><button className="btn">Comprar Ahora</button></Link> : 
            <button className="btn" onClick={addToCart}>Agregar al Carrito</button>}
            
        
        </div>
    ) : "Error";
}

export default ItemDetail;