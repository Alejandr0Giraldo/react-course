import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center fixed z10 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
                    <NavLink to='/' >
                        Punto Fashion
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/accesories'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Accesories
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/pedidos'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Pedidos
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    email@example.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒 0
                </li>
            </ul>
        </nav>
        
    )

}

export default Navbar