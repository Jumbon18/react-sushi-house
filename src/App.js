import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Auth from "./containers/Auth/Auth";
import SignUp from "./containers/SignUp/SignUp";
import Admin from "./containers/Admin/Admin";
import OrderEditor from "./containers/OrderEditor/OrderEditor";

class App extends Component {


    render() {
       let routes = (
            <Switch>
                <Route path="/auth" exact component={Auth}/>
                <Route path="/auth/signup" component={SignUp}/>
                <Route path="/admin" exact  component={Admin}/>
                <Route path="/admin/:id" component={OrderEditor}/>


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
