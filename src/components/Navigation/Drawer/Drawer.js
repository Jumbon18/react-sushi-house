import React from 'react';
import './Drawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import {NavLink} from "react-router-dom";
class Drawer extends React.Component{
    clickHandler = () =>{
        this.props.onClose();
    };
    render() {
        const cls = [
            'Drawer'
        ];
        if(!this.props.isOpen){
            cls.push('close');
        }
        return(
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        <li className="drawer-list">
                            <NavLink to="/admin">Главная</NavLink>
                            <NavLink to="/admin/menu">Меню</NavLink>
                            <NavLink to="/admin/products">Продукты</NavLink>
                            <NavLink to="/admin/products">Текущие заказы</NavLink>
                            <NavLink to="/admin/products">Выполненные заказы</NavLink>
                        </li>
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClose={this.props.onClose}/>
                    :
                    null}
            </React.Fragment>
        );
    }
}

export default Drawer;