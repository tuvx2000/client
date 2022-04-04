import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product,deleteProduct}) {

    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

  
    console.log((product._id, product.images.public_id))

    return (
        <div className="row_btn">
        {
            isAdmin ? 
            <>
                <Link class="deletebutton" id="btn_buy" to={`/`}
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                    Delete
                </Link>
                <Link class="editbutton" id="btn_view" to={`/edit_product/${product._id}`}
                >
                    Edit
                </Link>
            </>
            : <>
                <Link id="btn_buy" class="buybutton" to="#!" onClick={() => addCart(product)}>
                    Buy
                </Link>
                <Link class="viewbutton" id="btn_view" to={`/detail/${product._id}`}>
                    View
                </Link>
            </>
        }
            
    </div>
    )
}

export default BtnRender
