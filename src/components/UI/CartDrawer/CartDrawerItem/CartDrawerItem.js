import sushi1 from "../../../../images/set-drakon.jpeg";
import rubbish from "../../../../images/delete.png";
import React from "react";
import connect from "react-redux/es/connect/connect";
import './CartDrawerItem.css';
import Button from "../../Button/Button";
import deleteBtn from "../../../../images/x-button.png";

const CartDrawerItem = props =>{
    return(
        <li className={"drawerLi"}>
            <div className="CartDrawerItem">
                <div className="dish_header">
                    <img className={'small-dish'} src={props.dish.dish_image}/>
                    <span>{props.dish.Dish_name}</span>
                    <span>{props.dish.Dish_price} грн</span>
                        <Button
                            typeBtn="btn delete-btn-cart"
                            onClick={() => props.deleteItem(props.dish.Dish_id)}
                        > <img src={deleteBtn}/></Button>
                </div>
               {/* <div className={"dish_footer"}>
                    <input type="number" id="counter" value={props.amount} min="1" onChange={props.changeAmount}/>
                </div>*/}
            </div>
        </li>
    )
};
export default CartDrawerItem;