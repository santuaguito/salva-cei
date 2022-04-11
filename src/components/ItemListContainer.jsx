import {useEffect, useState} from 'react';
import itemsData from './api';
import Item from './Item';
import ItemList from './ItemList'

export const ItemListContainer =({greating}) => {


  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState (false);

 

  useEffect(() =>{
    const URL = 'https://mocki.io/v1/7f133f03-9231-4874-8622-4be9855c5ae4';
    const getItem = async() =>{
      try{
        const response = await fetch(URL);
        const data = await response.json();
        setProduct(data);
      }catch{
        setError(true);
      }finally{
        setLoading(false);
      }
    };
    getItem();
  })
  

   
    return(
        <div className='card'>
            {itemsData.map(e=>
                <Item key={e.id} producto ={e} />) }
                
        </div>
    )
 

   
}

