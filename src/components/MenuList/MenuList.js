import React from 'react';
import {connect} from "react-redux";
import './MenuList.css';
import sushi1 from "../../images/set-drakon.jpeg";
import Button from "../UI/Button/Button";
import rubbish from "../../images/delete.png";
import sushi2 from "../../images/philadelphia_mix.jpg";
import DishInList from "./DishInList/DishInList";

const MenuList = props =>{
    return(
        <div className="dish-wrapper">
            <ul className="dishes-list">
                <DishInList/>
            </ul>
            <Button
                typeBtn="btn btn-outline-primary btn-add"
                submitButton="submit"
            >Добавить блюдо</Button>
        </div>
    )
};

export default MenuList;