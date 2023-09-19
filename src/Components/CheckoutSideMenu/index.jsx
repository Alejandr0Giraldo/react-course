import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard/index'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    return (
        <aside
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkou-side-menu flex-col fixed top-68 right-0 border border-black rounded-lg bg-white`}>
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div>
            <XMarkIcon
                className='h-6 w-6 text-black cursor-pointer'
                onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
            </div>
        </div>
        <div className='px-6 overflow-y-scroll'>
            {
            context.cartProducts.map((product, index) => (
                    <OrderCard
                    key={index}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={handleDelete}
                    />
                ))
            }
        </div>
        </aside>
    )
}

export default CheckoutSideMenu