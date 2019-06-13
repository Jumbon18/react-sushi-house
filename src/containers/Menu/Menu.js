import React from 'react';
import './Menu.css';
import Navbar from "../../components/Navigation/Navbar/Navbar";
import MenuCards from "../../components/MenuCards/MenuCards";
import {connect} from "react-redux";
import {fetchMenu, fetchDeleteItem} from "../../store/actions/menu";
import Loader from "../../components/UI/Loader/Loader";
import AdminLayout from "../../hoc/AdminLayout/AdminLayout";


class Menu extends React.Component {
    state = {
        menu: false
    };
    componentDidMount() {
        if(this.props.token){
            this.props.fetchClientInfo()
        }
        this.props.fetchMenu('sets');
    }
    CartCloserHandler = () => {
        this.setState({
            menu:!this.state.menu
        });
        //this.props.fetchAllDishes();
    };

    render() {
        return (
            <div className="Menu">
                {this.props.MenuList.length <= 0 || this.props.loading ?
                <Loader/>
                    : this.props.role === 'админ'  ?
                        <AdminLayout>
                            <MenuCards
                                menuList={this.props.MenuList}
                                role={this.props.role}
                                Delete={this.props.fetchDeleteItem}
                            />
                        </AdminLayout> :
                    <React.Fragment>
                    <Navbar
                    changeCategory={this.props.fetchMenu}
                    close={this.CartCloserHandler}
                    menu={this.state.menu}
                    />
                    <MenuCards
                    menuList={this.props.MenuList}
                    />
                    </React.Fragment>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.menu.loading,
        MenuList: state.menu.MenuList,
        role: state.auth.role
    }
}

function mapDispatchToProps(dispatch) {
                return {
                    fetchMenu:(category) => dispatch(fetchMenu(category)),
                    fetchDeleteItem:(id) => dispatch(fetchDeleteItem(id))
                }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);