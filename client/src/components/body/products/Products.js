import React, { useContext } from 'react'
import { DataContext } from '../../../GlobalState'
import ProductCard from '../../utils/ProductCard/ProductCard'

export default function Products() {
    const state = useContext(DataContext)
    const [products] = state.products

    return (
        <div className="products_page">
            {
                products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))
            }
        </div>

    )
}
