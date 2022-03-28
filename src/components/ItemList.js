import { memo } from 'react'
import Item from './Item'
import ItemCount from './ItemCount'


const ItemList = memo( ( {producto} ) => {
    
        
    
        return (
            <>
                { producto.map(producto=> <Item producto={producto} />     )}  
                <ItemCount/>
            </>
            
        )
    }
)

export default ItemList