import {useState} from 'react'


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    

    function sumar(){
        if(count < stock){
            setCount(count + 1)       

        }
    }

    function restar(){
        if (count>1) {
            setCount(count - 1)            
        }
    }

    const agregarCarrito=()=>{
        onAdd(count)
        setCambiarBoton(false)
    }

    return (
        <div>
            <button onClick={sumar}>+</button>
            <label>{count}</label>
            <button onClick={restar}>-</button>
            <br/>
           {cambiarBoton ?
                <button onClick={agregarCarrito} >Agregar Al carrito</button>                
            : 
            <div>
                
                <button >Finalizar Compra</button>            
               
                <button >Seguir Comprando</button>      
            </div>
            
            }
            
            
        </div>
    )
}

export default ItemCount