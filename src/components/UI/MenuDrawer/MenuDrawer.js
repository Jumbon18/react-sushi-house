import React from 'react';
import './MenuDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import {NavLink} from "react-router-dom";

import MenuDrawerItem from "./MenuDrawerItem/MenuDrawerItem";
import {connect} from "react-redux";
import {fetchAllDeishes, fetchUpdatedSingleOrder} from "../../../store/actions/admin";
import BackDish from "../BackDish/BackDish";
class MenuDrawer extends React.Component{
    state={
        amount:1
    };
    clickHandler = () =>{
        this.props.onClose();
    };
    onChangeAmount = (e)=>{
        console.log(e.target);
        this.setState({amount: e.target.value});

    };
    onAddItem =(id,amount)=>{
        console.log(id,amount);
        const dish = {
            dish_id:id,
            dish_amount:parseInt(amount),
            id:this.props.id
        };
        this.props.fetchUpdatedSingleOrder(dish);
    };
    render() {
        console.log(this.props.menuList);
        console.log(this.props,'uyuyuyuyuyuyuyu');

        const cls = [
            'MenuDrawer'
        ];

        if(!this.props.isOpen){
            cls.push('close');
        }

        return(
            <React.Fragment>
                <div className={cls.join(' ')}>
                    <ul>
                        {this.props.menuList.length > 0 ?
                            this.props.menuList.map((el,index)=>{
                                return (
                                    <MenuDrawerItem
                                        dish={el}
                                        key={index}
                                        onAddItem={this.onAddItem}
                                        amount={this.state.amount}
                                        changeAmount={this.onChangeAmount}
                                    />
                                )})
                            :
                            null
                        }
                    </ul>
                </div>
                {this.props.isOpen ? <BackDish onClose={this.props.onClose}/>
                    :
                    null}
            </React.Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        menuList : state.admin.menuList,
        loading:state.admin.loading
    }
}
function mapDispatchToProps(dispatch) {
    return{
        fetchUpdatedSingleOrder:(dish)=>dispatch(fetchUpdatedSingleOrder(dish))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MenuDrawer);