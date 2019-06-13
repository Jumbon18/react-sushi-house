import React from 'react';
import './DishCard.css';
import Button from "../../UI/Button/Button";
import likeOutlined from "../../../images/like-outlined.png";
import like from "../../../images/like.png";
import check from "../../../images/arrow-right.png";
import deleteBtn from "../../../images/x-button.png";
import {Link} from "react-router-dom";
import {fetchLikedDish, fetchUnlikedDish} from "../../../store/actions/dish";
import connect from "react-redux/es/connect/connect";

class DishCard extends React.Component {
    state = {
        menu: false,
        like: false
    };
    likeChange = () => {
        this.setState({
            like: !this.state.like
        });
    };
    LikedDish = () => {
        this.likeChange();
        this.props.dish.dish_amount = 1;
        this.props.fetchLikedDish(this.props.dish);
    };
    UnlikedDish = () => {
      this.likeChange();
      this.props.fetchUnlikedDish(this.props.dish.Dish_id);
    };
    render() {
        return (
            <li>
                <div className="card">
                    <div className="card-header">
                        <h2 className="card-name">{this.props.dish.Dish_name}</h2>
                        {this.props.role === 'админ' ?
                            <Button
                                typeBtn="btn delete-btn"
                                onClick={() => this.props.deleteItem(this.props.dish.Dish_id)}
                            > <img src={deleteBtn}/></Button> :
                            !this.state.like || this.props.LikedDishData.length === 0 ?
                                <Button
                                    typeBtn="btn like-btn"
                                    onClick={() => this.LikedDish()}
                                ><img src={likeOutlined}/></Button>
                                :
                                <Button
                                    typeBtn="btn like-btn"
                                    onClick={() => this.UnlikedDish()}
                                ><img src={like}/></Button>
                        }
                    </div>
                    <img className="card-img" src={this.props.dish.dish_image}/>
                    <div className="card-footer">
                        <p className="card-price">{this.props.dish.Dish_price} грн </p>
                        {this.props.role === 'админ' ?
                            <Button
                                typeBtn="btn btn-success"
                            > Редактировать</Button>
                            :
                            <Link to={{pathname: `/menu/dish/${this.props.dish.Dish_id}`}} className="card-link"><img
                                src={check}/></Link>
                        }
                    </div>
                </div>
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        LikedDishData: state.dish.likedDishData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchLikedDish: (id) => dispatch(fetchLikedDish(id)),
        fetchUnlikedDish: (id) => dispatch(fetchUnlikedDish(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishCard);