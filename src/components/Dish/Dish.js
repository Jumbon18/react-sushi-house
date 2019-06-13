import React from 'react';
import './Dish.css';
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";
import ProductsInDish from "./ProductsInDish/ProductsInDish";

const Dish = props => {
    console.log(props);
    return(
            <div className="dish">
                <div className="dish-header">
                    {props.dish.categoryCategoryId === 5 ?
                    <Link to={"/menu/sets"}>
                        <Button
                            typeBtn="btn btn-info btn-exit"
                        >Назад</Button>
                    </Link>
                    : props.dish.categoryCategoryId === 6 ?
                            <Link to={"/menu/sushi"}>
                        <Button
                            typeBtn="btn btn-info btn-exit"
                        >Назад</Button>
                            </Link>
                    : props.dish.categoryCategoryId === 7 ?
                                <Link to={"/menu/rolls"}>
                        <Button
                            typeBtn="btn btn-info btn-exit"
                        >Назад</Button>
                                </Link> : null
                    }
                    <h2 className="dish-name">{props.dish.Dish_name}</h2>
                </div>
             <img className="dish-img" src={props.dish.dish_image}/>
                <div className="dish-footer">
                    <ul className="list-group list-group-flush dish-props-list">
                        <li className="list-group-item">Вес блюда:        {props.dish.Dish_weight} г </li>
                        <li className="list-group-item">Состав:    </li>
                        <ul className="list-group list-group-flush">
                            {props.products.map((product) => {
                                return(
                                    <ProductsInDish
                                        productDish={product}
                                    />
                                )
                            })}
                        </ul>
                        <li className="list-group-item">Цена:     {props.dish.Dish_price} грн</li>
                    </ul>
                </div>
                <Button
                    typeBtn="btn btn-info btn-add-cart"
                    submitButton="submit"
                >Добавить в корзину</Button>
            </div>
    )
};

export default Dish;