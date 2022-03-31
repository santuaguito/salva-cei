import React from 'react';
import ItemList from './ItemList';






function ItemListContainer({greating}) { 

 

    return (
        <div>
        <h2 className ="title">{ greating }</h2>
        <ItemList/>
        </div>    
    )
}

export default ItemListContainer