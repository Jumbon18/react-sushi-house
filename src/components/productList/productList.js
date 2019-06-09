import React from 'react';
import './productList.css';
import Product from "./Product/Product";
import Button from "../UI/Button/Button";
import DishCard from "../MenuCards/DishCard/DishCard";

const productList = props => {
    return (
        <div className="products-container">
            <Button
                typeBtn="btn btn-primary btn-product"
                onClick={()=>props.Add()}
            >Добавить продукт</Button>
            <ul className="products-list">
                {props.productList.map((product, index) => {
                    return(
                        <Product
                            key={index}
                            product={product}
                        />
                    )
                })}
            </ul>
        </div>)
};

export default productList;