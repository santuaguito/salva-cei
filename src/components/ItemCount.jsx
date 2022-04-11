import {useState} from 'react'
import '../components/ItemListContainer.css';



function ItemCount ({Stock, initial, onAdd})  {


    const [count, setCount] = useState(0)
   



    function sumar(){
        if(count >= 0 && count < Stock ){
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
            <button onClick ={()=>onAdd(count)}>Agregar Al carrito</button> 

            
           
            
            
            
        </div>
     
    )
}

export default ItemCount