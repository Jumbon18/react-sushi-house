import React from 'react';
import './CartDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import {NavLink} from "react-router-dom";
import BackCart from "../BackCart/BackCart";
import CartDrawerItem from "./CartDrawerItem/CartDrawerItem";
import {connect} from "react-redux";
import Button from "../Button/Button";
import likeOutlined from "../../../images/like-outlined.png";
//import {fetchAllDishes, fetchUpdatedSingleOrder} from "../../../store/actions/admin";

class CartDrawer extends React.Component{
    state = {
        amount: 1
    };
    clickHandler = () =>{
        this.props.onClose();
    };
/*    onChangeAmount = (e)=>{
        console.log(e.target);
        this.setState({amount: e.target.value});

    };*/
  /*  onAddItem =(id,amount)=>{
        console.log(id,amount);
        const dish = {
            dish_id:id,
            dish_amount:parseInt(amount),
            id:this.props.id
        };
        //this.props.fetchUpdatedSingleOrder(dish);
    };*/
    render() {
        console.log(this.props.menuList);
        console.log(this.props,'uyuyuyuyuyuyuyu');
        const cls = [
            'CartDrawer'
        ];

        if(!this.props.isOpen){
            cls.push('close');
        }

        return(
                <div className={cls.join(' ')}>
                            {this.props.LikedDishData.length > 0 ? this.props.LikedDishData.map((el, index) => {
                            return(
                                <CartDrawerItem
                                    dish={el}
                                    key={el.Dish_name}
                                    amount={this.state.amount}
                                />
                            )})  : null }
                    {this.props.LikedDishData.length > 0 ?
                            <Button
                                typeBtn="btn btn-info to-cart-btn"
                                /*  onClick={() => this.LikedDish()}*/
                            >Оформить заказ</Button>
                            :
                        <h4>Корзина пуста</h4>
                        }
                  {/*  <ul>
                        {this.props.menuList.length > 0 ?
                            this.props.menuList.map((el,index)=>{*/}
                           {/*     return (*/}
                                  {/*  <CartDrawerItem
                                        dish={el}
                                        key={index}
                                        //onAddItem={this.onAddItem}
                                        amount={this.state.amount}
                                        //changeAmount={this.onChangeAmount}
                                    />*/}
                              {/*  )})*/}
                       {/*    :
                            null
                        }
                    </ul>*/}
       {this.props.isOpen ? <BackCart onClose={this.props.onClose}/>
           : null }
                </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        menuList : state.admin.menuList,
        loading:state.admin.loading,
        LikedDishData: state.dish.likedDishData
    }
}
function mapDispatchToProps(dispatch) {
    return{
        //fetchUpdatedSingleOrder:(dish)=>dispatch(fetchUpdatedSingleOrder(dish))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartDrawer);