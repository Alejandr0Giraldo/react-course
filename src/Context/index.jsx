import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // Shopping cart . increment quantity
    const [count, setCount] = useState(0)

    // Product Detail . open / close 
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    // Checkout Side Menu . open / close 
    const [isCheckoutSideMenuOpen, setIsheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsheckoutSideMenuOpen(false)

    // Product Detail . Show product 
    const [productToShow, setProductToShow] = useState({})
    // Shopping Cart . Add products to cart 
    const [cartProducts, setCartProducts] = useState([])


    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
} 
