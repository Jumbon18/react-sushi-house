import React from 'react';
import './DishView.css';
import Dish from "../../components/Dish/Dish";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Button from "../../components/UI/Button/Button";
import {fetchDish} from "../../store/actions/dish";
import connect from "react-redux/es/connect/connect";

class DishView extends React.Component {
    componentDidMount() {
        this.props.fetchDish(this.props.match.params.id);
    }
    render() {
        return(
            <div className="dish-view">
                {this.props.dishData ?
                    <React.Fragment>
                    <Navbar/>
                    <Dish
                    dish={this.props.dishData.dish}
                    products={this.props.dishData.products}
                    />
                    </React.Fragment>
                    : null
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        loading: state.dish.loading,
        dishData: state.dish.dishData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchDish:(id) => dispatch(fetchDish(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DishView);