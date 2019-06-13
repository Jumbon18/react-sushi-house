import React from 'react';
import {connect} from "react-redux";
import './OrderCreateDish.css';
import sushi1 from "../../images/set-drakon.jpeg";
import Button from "../UI/Button/Button";
import rubbish from "../../images/delete.png";
import sushi2 from "../../images/philadelphia_mix.jpg";
import OrderCreateItem from "./OrderCreateItem/OrderCreateItem";

const OrderCreateDish = props =>{
    return(
        <div className="OrderCreateDish">
            <ul className="dishes-list">
                {props.likeList.map((el,index)=>{
                    return (
                        <OrderCreateItem
                            key={index}
                            like={el}
                            onChangeAmount={props.onChangeAmount}/>
                    )
                })}

            </ul>
        </div>
    )
};

export default OrderCreateDish;