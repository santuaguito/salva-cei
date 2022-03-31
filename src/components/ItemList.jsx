import {useState, useEffect} from 'react'
import Item from './Item';
import itemsData from './api';


function ItemList(){
    const [items ,setItems] = useState([]);
    useEffect(() => {
        setTimeout(()=>{
            setItems(itemsData);
            console.log(items);
        }, 2000);
    });
    return(
        <div className='card'>
            {itemsData.map(e=>
                <Item key={e.id} producto ={e} />) }
                
        </div>
    )
}

export default ItemList