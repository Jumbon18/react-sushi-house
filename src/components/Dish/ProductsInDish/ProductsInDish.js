import React from 'react';
import './ProductsInDish.css';

const ProductsInDish = props => {
    return(
        <li className="list-group-item product">{props.productDish.Product_name}</li>
    )
};

export default ProductsInDish;