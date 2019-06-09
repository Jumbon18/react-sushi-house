import sushi1 from "../../../../images/set-drakon.jpeg";
import rubbish from "../../../../images/delete.png";
import React from "react";
import connect from "react-redux/es/connect/connect";
import './CartDrawerItem.css';
import Button from "../../Button/Button";

const CartDrawerItem = props =>{
    return(
        <li className={"drawerLi"}>
            <div className="CartDrawerItem">
                <div className="dish_header">
                    <img className={'small-dish'} src={props.dish.dish_image}/>
                    <span>{props.dish.Dish_name}</span>
                    <span>{props.dish.Dish_price}</span>
                </div>
               {/* <div className={"dish_footer"}>
                    <input type="number" id="counter" value={props.amount} min="1" onChange={props.changeAmount}/>
                </div>*/}
            </div>
        </li>
    )
};
export default CartDrawerItem;