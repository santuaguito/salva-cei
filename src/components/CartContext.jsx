import {createContext, useState, useContext} from 'react'

const StoreContext = createContext()
const useCartContext = () => useContext(StoreContext)


export const StoreProvider = ({children}) =>{

    const [product, setProduct] = useState([])
    const [isInCart, setIsInCart] = useState(false)

    const addProduct = (produdct, quantity) => {
        const inCartList = product.find((i) => i.id === product.id)
        setIsInCart(true)
        if(inCartList){
            inCartList.quantity += quantity
            setProduct([...product])
        } else {
            setProduct([...product, {...product, quantity}])
        }
    }

    const removeProduct = (id) => {
        product.splice(
            product.findIndex((i) => i.id === id), 1
        )
        setProduct([...product])
        if(product.length === 0){
            setIsInCart(false)
        }
    }

    const totalProductsPrice = () => {
        return product.reduce((add, i) => (add += i.price * i.quantity), 0)
    }

    const cartWidgetCount = () => {
        return product.reduce((add,i) => (add += i.quantity), 0)
    }

    const cleanListCart = () => {
        setProduct([])
    }

     
    return(
        <StoreContext.Provider 
        value = {{ product, addProduct, removeProduct, totalProductsPrice, isInCart, cartWidgetCount, cleanListCart}}>
            {children}
        </StoreContext.Provider>
    )

}
export default useCartContext;