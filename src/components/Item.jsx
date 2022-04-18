import {useState} from "react";
import ItemCount from "./ItemCount";
import '../components/ItemListContainer.css';
import {Link} from 'react-router-dom';    






const Item = ({product}) => {

    const [cart, setCart] = useState(false)
    const onAdd =()=> {
        setCart (true)
    }
    return (      
        <div className="card">
            <div key={product.id} >
                    <div className="card-header">
                        {product.Descripcion}
                    </div>
                    <div className="card-body">
                        <img width="250" height="250" src={product.Imagen} alt="foto" />
                        {product.Precio}
                        
                       
                    </div>
                    <div className="card-footer">
                            <Link to={`/itemDetail/${product.id}`}>
                            <button className="btn btn-outline-primary btn-block">
                                Detalle de producto 
                            </button>
                            </Link>
                    </div>

                    {cart? 
                    <div> 
                        <Link to = {'/cart'}>
                            <button> 
                                Finalizar Compra
                            </button>
                        </Link>
                    </div>:  <ItemCount Stock = {product.Stock} onAdd = {()=> onAdd()} /> }

                  
                </div>
        </div>
    )
}

export default Item;

