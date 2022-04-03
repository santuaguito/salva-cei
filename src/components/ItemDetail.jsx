import {useState} from 'react'
import ItemCount from './ItemCount'



const ItemDetail = ({item}) => {
    const stocks = item.stock
    const initial = 1
   
    

   


    return (
        
        <div className="card-product-detail">
            <div className="img-detail">
                <img src={item.Imagen} alt={item.id}/>
            </div>
            <div className="info-detail">
                <h3>{item.Descripcion}</h3>
                <p className="card-description">{item.Descripcion}</p>
                <p className="card-price">{item.Precio}</p>
                <ItemCount />
                <button >Agregar al Carrito</button>
                <button className="btn">Comprar Ahora</button>
            </div>
        </div>
           
    )
}

export default ItemDetail