import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import Products from './Products'

function Filters() {
    const state = useContext(GlobalState)

    const [products, setProducts] = state.productsAPI.products
    const [search, setSearch] = state.productsAPI.search
    const [page, setPage] = state.productsAPI.page


    const handleCategory = e => {
        setPage(e.target.value)
        setSearch('')
    }
    function xxx(product,index){
        console.log(index)
        
            if((index)*3 > products.length)  return;

            return<option value={index+1} key={product._id} >
                    {(index+1)*3}
                </option> 

        {


    }




    }
    return (
        <div className="filter_menu">
            <div className="row">
                <span>Current Items Display: </span>
                <span>{products.length}</span>
            </div>

            <div className="row sort">
                <span>Page Size: </span>
                <select name="category" page={100} onChange={handleCategory} >
                    <option value=''>All Products</option>
                    {
                        products.map((product,index) => (
                            xxx(product,index)
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default Filters
