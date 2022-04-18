import {createContext, useState} from 'react'

const StoreContext = createContext()
const StoreProvider =({children})=>{
    const [products, setProducts] = useState([])
    const [isInCart, setIsInCart] = useState(false)
    


    const addProduct = (product, quantity) => {
        const inCartList = products.find((i) => i.id === product.id)
        setIsInCart(true)
        if(inCartList){
            inCartList.quantity += quantity
            setProducts([...products, product])
        } else {
            setProducts([...products, {...product, quantity}])
        }
    }

    const removeProduct = (id) => {
        products.splice(
            products.findIndex((i) => i.id === id), 1
        )
        setProducts([...products])
        if(products.length === 0){
            setIsInCart(false)
        }
    }

    const totalProductsPrice = () => {
        return products.reduce((add, i) => (add += i.price * i.quantity), 0)
    }

    const cartWidgetCount = () => {
        return products.reduce((add,i) => (add += i.quantity), 0)
    }

    const cleanListCart = () => {
        setProducts([])
    }

     
    return(
        <StoreContext.Provider 
        value = {{ products, addProduct, removeProduct, totalProductsPrice, isInCart, cartWidgetCount, cleanListCart}}>
            {children}
        </StoreContext.Provider>
    )

}
export {StoreProvider}
export default StoreContext;