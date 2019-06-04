import React from 'react';
import './Order.css';
import {Link} from "react-router-dom";
const Order = props =>{
    const url = `/admin/${props.order_id}`;
    return(
        <tr>
            <td>
                {props.order_id}
            </td>
            <td>Филадельфия</td>
            <td>{props.FIO}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.address}</td>
            <td>Ирина Телешева</td>
            <td>Иван Иванов</td>
            <td>{props.payment}</td>
            <td>{props.notes}</td>
            <td>550 грн</td>
            <td>{props.status}</td>
            <td>{props.start}</td>
            <td>{props.end}</td>

            <td>
                <Link to={
                    {pathname:`/admin/${props.order_id}`,
                    state:{
                        fromOrder:{
                            price:'550 грн',
                            Chef:'Ирина Телешева',
                            Courier:'Иван Иванов',
                            start:props.start,
                            end:props.end,
                            address:props.address,
                            email:props.email,
                            name:props.FIO,
                            phone:props.phone,
                            payment:props.payment,
                            notes:props.notes,
                            status:props.status,
                            id:props.order_id
                        }
                    }
                    }
                }>
                <button className="btn-edit btn btn-outline-primary">Edit</button>
                </Link>
            </td>
        </tr>
    );
};
export default Order;