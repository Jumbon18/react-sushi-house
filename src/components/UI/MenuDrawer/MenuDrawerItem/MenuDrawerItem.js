import sushi1 from "../../../../images/set-drakon.jpeg";
import rubbish from "../../../../images/delete.png";
import React from "react";
import connect from "react-redux/es/connect/connect";
import './MenuDrawerItem.css';
import Button from "../../Button/Button";

const MenuDrawerItem = props =>{
    return(
        <li className={"drawerLi"}>
            <div className="MenuDrawerItem">
                <div className="dish_header">
                    <img className={'small-dish'} src={sushi1}/>
                    <span>{props.dish.dish_name}</span>
                    <span>{props.dish.weight} кг</span>
                    <span>{props.dish.dishPrice} грн</span>
                </div>
                <div className={"dish_footer"}>
                    <Button typeBtn={"btn btn-primary"} onClick={()=>props.onAddItem(props.dish.dish_id,props.amount)}>Добавить</Button>
                    <input type="number" id="counter" value={props.amount} min="1" onChange={props.changeAmount}/>
                </div>

            </div>
        </li>
    )
};

export default MenuDrawerItem;