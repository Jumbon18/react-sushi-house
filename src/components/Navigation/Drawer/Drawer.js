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
                            <NavLink to="/admin/menu">Menu</NavLink>
                            <NavLink to="/admin/products">Products</NavLink>
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