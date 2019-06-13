import sushi1 from "../../../images/set-drakon.jpeg";
import Button from "../../UI/Button/Button";
import rubbish from "../../../images/delete.png";
import React from "react";
import './OrderCreateItem.css';
import {connect} from "react-redux";
import {fetchUpdateAmount} from "../../../store/actions/dish";

class OrderCreateItem extends React.Component{
    state={
        amount:1
    };
    onChangeAmount = (e)=>{
       this.props.fetchUpdateAmount(this.props.like.Dish_id,parseInt(e.target.value));
    };
    render() {
        return (
            <li>
                <div className="OrderCreateItem">
                    <input type="number" id="counter" value={this.props.like.dish_amount} min="1" onChange={this.onChangeAmount}/>
                    <div className="dish-img create-item">
                        <img src={sushi1}/>
                    </div>
                    <div className={'item-info'}><span>{this.props.like.Dish_name}</span>
                    </div>
                    <div className={'item-info'}><span>{this.props.like.Dish_weight} гр</span>
                    </div>

                    <div className={'item-info'}>
                        <span>Цена:   <br/>{this.props.like.Dish_price * this.props.like.dish_amount} грн</span>
                    </div>
                    <div className={'delete-btn'}>
                        <Button
                            typeBtn="btn btn-remove"
                            submitButton="submit"
                        ><img className="delete-btn-order" src={rubbish}/></Button>
                    </div>
                </div>
            </li>
        )
    }
}
function mapStateToProps(state) {
    return{

    }
}
function mapDispatchToProp(dispatch) {
    return{
        fetchUpdateAmount:(id,amount)=>dispatch(fetchUpdateAmount(id,amount))
    }
}
export default connect(mapStateToProps,mapDispatchToProp)(OrderCreateItem);