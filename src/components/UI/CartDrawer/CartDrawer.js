import React from 'react';
import './CartDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import {NavLink} from "react-router-dom";
import BackCart from "../BackCart/BackCart";
import CartDrawerItem from "./CartDrawerItem/CartDrawerItem";
import {connect} from "react-redux";
import Button from "../Button/Button";
import likeOutlined from "../../../images/like-outlined.png";
import Navbar from "../../Navigation/Navbar/Navbar";
import {fetchUnlikedDish} from "../../../store/actions/dish";
//import {fetchAllDishes, fetchUpdatedSingleOrder} from "../../../store/actions/admin";

class CartDrawer extends React.Component{

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
               <React.Fragment>
                <div className={cls.join(' ')}>
                    <ul>
                            {this.props.LikedDishData.length > 0 ? this.props.LikedDishData.map((el, index) => {
                                return(
                                <CartDrawerItem
                                    dish={el}
                                    key={el.Dish_name}
                                    deleteItem={this.props.fetchUnlikedDish}
                                    dishes={this.props.LikedDishData}
                                />
                                )}): null }
                    </ul>
                    {this.props.LikedDishData.length > 0 ?
                          <NavLink to="/menu/createOrder">
                            <Button
                                typeBtn="btn btn-info to-cart-btn"
                            >Оформить заказ</Button>
                          </NavLink>
                            :
                        <h4>Корзина пуста</h4>
                        }
                </div>
       {this.props.isOpen ? <BackCart onClose={this.props.onClose}/>
           : null }

               </React.Fragment>
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
        fetchUnlikedDish:(id) => dispatch(fetchUnlikedDish(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartDrawer);