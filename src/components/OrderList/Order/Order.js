import React from 'react';
import './Order.css';
import {Link} from "react-router-dom";
import Button from "../../UI/Button/Button";
import deleteBtn from "../../../images/x-button.png";
const Order = props =>{
    const url = `/admin/${props.order_id}`;
    return(
        <tr>
            <td>
                {props.order_id}
            </td>
            <td>{props.FIO}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.address}</td>
            <td>Филадельфия</td>
            <td>{props.payment}</td>
            <td>550 грн</td>
            <td>{props.status}</td>
            <td className="order-td">
                <Link to={
                    {pathname:`/admin/${props.order_id }`,
                        state:{
                            fromOrder:{
                                order:props.order
                            }
                        }
                    }
                }>

                        <Button typeBtn="btn-edit btn btn-outline-primary" onClick={()=>props.currentOrder(props.order_id )}>Edit</Button>
                     </Link>
                <Button
                    typeBtn="btn delete-order"
                    onClick={() => props.deleteAdminOrder(props.order_id)}
                > <img src={deleteBtn}/></Button>
            </td>
        </tr>
    );
};
export default Order;