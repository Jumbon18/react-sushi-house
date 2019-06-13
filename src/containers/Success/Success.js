import React from 'react';
import Button from "../../components/UI/Button/Button";
import {NavLink} from "react-router-dom";
import './Success.css'
class Success extends React.Component{
    render() {
        return(
         <div className={'Success'}>
             <div className={"success-block"}>
             <h1>Спасибо за заказ, {this.props.location.state.fromOrder.FIO}!<br/> В ближайшее время с вами свяжется наш менеджер.<br/><br/> Спасибо что выбрали нас 😍😘❤ </h1>
             <NavLink to="/menu">
             <Button typeBtn={"btn btn-lg btn-primary"}>
                 Назад к покупкам
             </Button>
             </NavLink>
             </div>
         </div>
        )
    }
}
export default Success;