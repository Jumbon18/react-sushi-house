import React from 'react';
import Order from "./Order/Order";
import {connect} from "react-redux";
import './OrderList.css';
const OrderList = props =>{
    return(
       <table className="order-table">
       <thead>
        <tr>
     <th>Id заказа</th>
                <th>Ф.И.О</th>
                <th>Телефон</th>
                <th>Email</th>
                <th>Адресс</th>
                 <th>Блюда</th>
                <th>Тип оплаты</th>
                <th>Цена</th>
                <th>Статус</th>
</tr>
 </thead>
            <tbody>
            {props.orderList.length > 0 ?
                props.orderList.map((order,index) => {
                   const Start = order.order.createdAt.split('T');
                   const time = Start[1].split('.');
                    const resDate = Start[0].split('-');
                    const resTime = time[0].split(':');
                    const res1 = `${resDate[2]}.${resDate[1]}.${resDate[0]} в `;
                    const res2 = `${resTime[0]}:${resDate[1]}`;
                    return(
                        <Order
                            key={index}
                            FIO={`${order.order.client_name} ${order.order.client_surname}`}
                            phone={order.order.client_phone}
                            address={order.order.Delivery_address}
                            order_id={order.order.Order_id}
                            payment={order.order.Payment_method}
                            notes={order.order.Notes}
                            status={order.order.Order_status}
                            start={`${res1}${res2}`}
                            end={order.order.Delivery_time}
                            email={order.order.client_email}
                            deleteAdminOrder={props.deleteOrder}
                            currentOrder={props.currentOrder}
                        >
                        </Order>
                    )
                }) :
                <tr><td><h2 className="Error">There are no orders</h2></td></tr>
            }
            </tbody>
</table>

    )
    };
function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps)(OrderList);