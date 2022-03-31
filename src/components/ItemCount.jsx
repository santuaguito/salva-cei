import {useState} from 'react'
import '../components/ItemListContainer.css';
import itemsData from './api';


function ItemCount ({stock, initial, onAdd})  {


    const [count, setCount] = useState(0)
   



    function sumar(){
        if(count >= 0){
            setCount(count + 1)
                

        }
    }

    function restar(){
        if (count>0) {
            setCount(count - 1)            
        }
    }

  

    return (
        
        <div>
            <button onClick={sumar}>+</button>
            <label>{count}</label>
            <button onClick={restar}>-</button>
            <br/>
          
                <button >Agregar Al carrito</button>                
            
           
            
            
            
        </div>
     
    )
}

export default ItemCount