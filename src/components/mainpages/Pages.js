import React, {useContext} from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import DetailProduct from './detailProduct/DetailProduct'

import Products from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import OrderHistory from './ordersHistory/OrderHistory'
import OrderDetails from './ordersHistory/OrderDetails'

import Categories from './categories/Categories'

import CreateProduct from './createProduct/CreateProduct'



import {GlobalState} from '../../GlobalState'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    // console.log("Pages", isLogged)
    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            <Route path="/cart" exact component={Cart} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />

            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

        
        
        
            <Route path="/category" exact component={isLogged ? Categories : NotFound} />
           
           
            <Route path="/category" exact component={isLogged ? Categories : NotFound} />

            <Route path="/category" exact component={isLogged ? Categories : NotFound} />



            <Route path="/create_product" exact component={isLogged ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isLogged ? CreateProduct : NotFound} />


            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/*" exact component={NotFound} />

        </Switch>
    )
}

export default Pages