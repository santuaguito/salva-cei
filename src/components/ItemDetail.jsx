import React from 'react'
import ItemCount from './ItemCount';



const ItemDetail = ({product}) =>{



    return(
        <div>
            <h1>{product.Descripcion}</h1>
            <img src={product.Imagen} alt={product.Descripcion} />
            <span>{product.Precio}</span>
            <ItemCount/>
           
        </div>
    )
}

export default ItemDetail;