import React from 'react';
import {connect} from "react-redux";
import {fetchOrders, fetchSubCurrentOrder} from "../../store/actions/admin";
import OrderList from "../../components/OrderList/OrderList";
import './Admin.css';
import AdminLayout from "../../hoc/AdminLayout/AdminLayout";
import {fetchDeleteOrder} from "../../store/actions/admin";

class Admin extends React.Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    render() {
        console.log(this.props.match.params);

        return (
            <AdminLayout>
            <div className="Admin">
                <OrderList
                    orderList={this.props.orderList}
                    deleteOrder={this.props.fetchDeleteOrder}
                    currentOrder={this.props.fetchSubCurrentOrder}
                />
            </div>
            </AdminLayout>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
        fetchDeleteOrder: (id) => dispatch(fetchDeleteOrder(id)),
        fetchSubCurrentOrder:(id)=>dispatch(fetchSubCurrentOrder(id)),
    }
}

function mapStateToProps(state) {
    return {
        orderList: state.admin.orderList,
        loading: state.admin.loading,
        success_order: state.admin.success_order
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);