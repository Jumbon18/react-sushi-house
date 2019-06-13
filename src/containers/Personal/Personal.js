import React from 'react';
import './Personal.css';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import personal from '../../images/round-account-button-with-user-inside.png';
import PersonalList from "../../components/PersonalList/PersonalList";
class Personal extends React.Component{
    render() {
        return (
            <div className={'Personal'}>
                <div className={'personal-icon'}>
                    <img src={personal} alt=""/>
                </div>

                <div className={'personal-info'}>
                    <p>Ирина Телешева</p>

                </div>

                <div className={'personal-orders'}>
            <div className={'order-links'}>
                <NavLink to={'/personal/current'}>Текущие</NavLink>
                <NavLink to={'/personal/success'}>История</NavLink>
            </div>
                    <div className={'order-info'}>
                       <PersonalList
                           personalOrders={[1,2,3,4]}
                       />
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{

    }
}
function mapDispatchToProps(dispatch) {
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Personal);