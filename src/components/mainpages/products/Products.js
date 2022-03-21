import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/productItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'

import Filters from './Filters'

import Pagination from './Pagination'

function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
  
    const [loading, setLoading] = useState(false)

    const [callback, setCallback] = state.productsAPI.callback

    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }
    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }


    const deleteProduct = async(id, public_id) => {
        console.log(id,public_id)
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct 
            setCallback(!callback)
            setLoading(false)
            alert("Deleted")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }


    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }



    if(loading) return <div><Loading /></div>
    return ( 
        <>
        <Filters />
        <Pagination/>
        {
            isAdmin && 
            <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Delete ALL</button>
            </div>
        }



        <div className="products">
            {
                    products.map(product =>{
                        return <ProductItem key={product._id} product={product}
                        handleCheck ={handleCheck}
                        deleteProduct={deleteProduct}
                        isAdmin={isAdmin}  />

                    })
            }
        </div>

        {products.length === 0 && <Loading />}
        </>

    )


}

export default Products