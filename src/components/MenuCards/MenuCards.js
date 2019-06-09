import React from 'react';
import './MenuCards.css';
import DishCard from "./DishCard/DishCard";
import Button from "../UI/Button/Button";

const MenuCards = props => {
    console.log(props);
    return (
        <div className="cards-container">
            {props.role === 'админ' ?
                <Button
                    typeBtn="btn btn-primary btn-dish"
                    submitButton="submit"
                >Добавить блюдо</Button> : null
            }
            <ul className="cards-list">
                {props.menuList.length > 0 ?
                props.menuList.map((dish, index) => {
                    return(
                        <DishCard
                        key={index}
                        dish={dish}
                        role={props.role}
                        deleteItem={props.Delete}/*
                        isLiked={props.like}
                        like={props.LikeState}*/
                        />
                    )
                }) : null }
            </ul>
        </div>)
};

export default MenuCards;