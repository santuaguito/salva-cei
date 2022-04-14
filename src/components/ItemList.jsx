import React from 'react'
import Item from './Item';
import '../components/ItemListContainer.css';


const ItemList = ({producto}) => {
    
    return (
        <div className='card'>
        {producto.map((product) =>(
            <Item key ={product.id} product ={product}/>
            
        ))}
        </div>    
    )
}

export default ItemList;