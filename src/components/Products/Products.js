import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const Products = ({products}) => {
    return (
        <div className="d-flex justify-content-center flex-wrap">
            {
                products.map((product,index) => (<ProductCard product={product} key={index}/>))
            }
        </div>
    )
}

export default Products
