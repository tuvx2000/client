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


    return (
        <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/Login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/*" exact component={NotFound} />

        </Switch>
    )
}

export default Pages