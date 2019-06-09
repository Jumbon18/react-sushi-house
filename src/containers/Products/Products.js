import React from 'react';
import "./Products.css";
import {connect} from "react-redux";
import {fetchProduct, fetchAddProduct} from "../../store/actions/product";
import Loader from "../../components/UI/Loader/Loader";
import AdminLayout from "../../hoc/AdminLayout/AdminLayout";
import ProductList from '../../components/productList/productList';

class Products extends React.Component {
    componentDidMount() {
        this.props.fetchProduct();
    }
    render() {
        return (
            <div className="Products">
                {this.props.loading ?
                    <Loader/>
                    :
                        <AdminLayout>
                            <ProductList
                                productList={this.props.productList}
                                Add={this.props.fetchAddProduct}
                            />
                        </AdminLayout>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.product.loading,
        productList: state.product.productList
    }
}



function mapDispatchToProps(dispatch) {
    return {
        fetchProduct:() => dispatch(fetchProduct()),
        fetchAddProduct:() => dispatch(fetchAddProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);