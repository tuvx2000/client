import React, {useContext} from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import DetailProduct from './detailProduct/DetailProduct'

import Products from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'


import {GlobalState} from '../../GlobalState'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    console.log("Pages", isLogged)
    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/*" exact component={NotFound} />

        </Switch>
    )
}

export default Pages