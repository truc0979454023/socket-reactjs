import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {

    return (
        <div className="product_card">
            <img src={product.images.url} alt={product.images.url} />
            <h3>{product.title}</h3>
            <span>$ {product.price}</span>
            <p>{product.description}</p>
            <div className="product_card_row">
                <button>Buy</button>
                <Link to={`/product/${product._id}`}>View</Link>
            </div>
        </div>
    )
}
