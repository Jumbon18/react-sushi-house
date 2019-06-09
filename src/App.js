import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Auth from "./containers/Auth/Auth";
import SignUp from "./containers/SignUp/SignUp";
import Admin from "./containers/Admin/Admin";
import OrderEditor from "./containers/OrderEditor/OrderEditor";
import Menu from "./containers/Menu/Menu";
import DishView from "./containers/DishView/DishView";
import DishCard from "./components/MenuCards/DishCard/DishCard";
import AdminLayout from "./hoc/AdminLayout/AdminLayout";
import Products from "./containers/Products/Products";

class App extends Component {
    render() {
       let routes = (
            <Switch>
                <Route path="/auth" exact component={Auth}/>
                <Route path="/auth/signup" component={SignUp}/>
                <Route path="/admin" exact  component={Admin}/>
                <Route path="/admin/order/:id" component={OrderEditor}/>
                <Route path="/menu" exact component={Menu}/>
                <Route path="/menu/dish/:id" component={DishView}/>
                <Route path="/admin/menu" exact component={Menu}/>
                <Route path="/admin/products" component={Products}/>
                <Route path="/menu/sets" exact component={Menu}/>
                <Route path="/menu/sushi" exact component={Menu}/>
                <Route path="/menu/rolls" exact component={Menu}/>
                <Redirect to="/"/>
            </Switch>
        );
        if (this.props.isAuthenticated) {
            routes = (

                <Switch>

                        <Redirect to="/"/>
                </Switch>
            );
        }
        return (
            <Layout>
                {routes}
            </Layout>
        );

    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
