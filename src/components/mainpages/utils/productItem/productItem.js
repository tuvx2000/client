import React, {useContext, useState} from 'react'
import BtnRender from './BtnRender'
import axios from 'axios'
import {GlobalState} from '../../../../GlobalState'


function ProductItem({product, isAdmin, callback, setCallback,handleCheck,token,deleteProduct}) {
    const state = useContext(GlobalState)

    const [loading, setLoading] = useState(false)


    const deleteProduct1 = async(id, public_id) => {
        try {
                       setLoading(true)

            console.log("Product Item Deletingggggg")
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct

                       setLoading(false)

            setCallback(!callback)


        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    

    return (
        <div className="product_card">

            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }


            <img src={product.images.url} alt="" />



            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>


            <BtnRender product={product}  deleteProduct={deleteProduct}/>
        </div>
    )
}

export default ProductItem
