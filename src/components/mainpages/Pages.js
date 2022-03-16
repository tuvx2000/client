import React from 'react'
import {Switch, Route, Routes, Router} from 'react-router-dom'

import Products from './products/Products'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'


import {GlobalState} from '../../GlobalState'

function Pages() {
    return (
        <Routes>
            <Router path="/" exact component={Products} />
            <Router path="/login" exact component={Login} />
            <Router path="/register" exact component={Register} />
            <Router path="/cart" exact component={Cart} />

        </Routes>
    )
}

export default Pages