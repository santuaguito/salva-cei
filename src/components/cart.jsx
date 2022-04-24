import { Link } from 'react-router-dom'
import { StoreProvider } from './CartContext'


const Cart = ( {condition = true} ) => {  

    
    const { inCartList, deleteFromCart, cleanListCart } = StoreProvider()
    
    
    console.log(inCartList)
    return (
        <div>

            {inCartList.length === 0  ?   
                <div>
                    <h1>Agregar productos</h1>
                    <Link to='/' >Ir a Comprar</Link>
                </div>
            : 
                <div>
                    {inCartList.map(resp => <div key={resp.item.id}>
                        <h2>{resp.item.Descripcion}</h2>
                        <button onClick={()=> deleteFromCart(resp)} > X </button>
                    </div>
                    )}
                    <button onClick={() => cleanListCart()} >Vaciar Carrito</button>
                </div>
            }
              



        </div>
    )
}

export default Cart