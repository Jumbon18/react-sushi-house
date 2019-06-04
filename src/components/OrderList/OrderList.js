import React from 'react';
import Order from "./Order/Order";
import {connect} from "react-redux";
import './OrderList.css';
const OrderList = props =>{

    return(

        <table className="table table-striped table-hover">
            <thead>
            <tr>
                <th>Id</th>
                <th>Блюда</th>
                <th>Ф.И.О</th>
                <th>Телефон</th>
                <th>Email</th>
                <th>Адресс</th>
                <th>Повар</th>
                <th>Курьер</th>
                <th>Тип оплаты</th>
                <th>Примечания</th>
                <th>Цена</th>
                <th>Статус</th>
                <th>Время получения</th>
                <th>Время доставки</th>


            </tr>
            </thead>
            <tbody>
            {props.orderList.length > 0 ?
                props.orderList.map((order,index)=>{
                   const Start = order.createdAt.split('T') ;
                   const time = Start[1].split('.');
console.log(time[0]);
                    return(
                        <Order
                            key={index}
                            FIO={`${order.client_name} ${order.client_surname}`}
                            phone={order.client_phone}
                            address={order.address}
                            order_id={order.order_id}
                            payment={order.paymentType}
                            notes={order.notes}
                            status={order.status}
                            start={`${Start[0]} ${time[0]}`}
                            end={order.deliveredTime}
                            email={order.email}
                        >
                        </Order>
                    )
                }) :
                <tr><td><h1 className="Error">NO RESULT</h1></td></tr>
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