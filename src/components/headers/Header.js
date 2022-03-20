import React, {useContext, useState} from 'react'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState'
import axios from 'axios'


function Header() {
    const state = useContext(GlobalState)

    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [menu, setMenu] = useState(false)
    const [cart] = state.userAPI.cart

    
    const lougoutuser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

 
    


    const loggedRouter = () =>{
        return(
            <>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/" onClick={lougoutuser}>Logout</Link></li>
        </>
        )
    }

    
    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    return (
        <header>
            <div className='menu'>
                <img src={Menu} alt="" width="30" />
            </div>
            <div className="logo">
            <h1>
                    <Link to="/">{isAdmin ? 'Admin' : '10Real Shop'}</Link>
                </h1>
            </div>

            <ul>
                    <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>
                    {isAdmin && adminRouter()}


                    {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                    }


            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
        </header>

    )
}

export default Header