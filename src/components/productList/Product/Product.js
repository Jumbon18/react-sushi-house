import React from 'react';
import './Product.css';
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import {fetchDeleteProduct, fetchUpdateProduct} from '../../../store/actions/product';
import connect from "react-redux/es/connect/connect";

class Product extends React.Component {
    state = {
        edit: false,
        formControl: {
            product_name: {
                value: this.props.product.Product_name,
                type: 'text',
                label: 'Название',
                placeholder: 'Название',
                errorMessage: 'Enter the proper product name',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    name: true
                }
            },
            product_amount: {
                value: this.props.product.Product_amount,
                type: 'text',
                label: 'Количество',
                placeholder: 'Количество',
                errorMessage: 'Enter the proper product amount',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            }
        }
    };
    onChangeHandler = (event, controlName) => {
        const formControl = {...this.state.formControl};
        const control = {...formControl[controlName]};
        control.value = event.target.value;
        control.touched = true;
        formControl[controlName] = control;
        this.setState({
            formControl
        })
    };
    submitHandler =(e)=>{
        e.preventDefault();
        const product = {
            Product_id:this.props.product.Product_id,
            Product_name:this.state.formControl.product_name.value,
            Product_amount:this.state.formControl.product_amount.value
        };
        this.setState({
            edit: !this.state.edit
        });
        this.props.fetchUpdateProduct(product);
    };
    fetchEditProductStart = () => {
        this.setState({
            edit: !this.state.edit
        })
    };
    renderInputs = () => {
        return Object.keys(this.state.formControl).map((controlName, index) => {
            const control = this.state.formControl[controlName];
            return (
                <Input
                    errorAuth={this.state.errorAuth}
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    placeholder={control.placeholder}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={(event) => this.onChangeHandler(event, controlName)}
                    styleInput="auth-input"
                />

            )
        });
    };
    render() {
        console.log(this.props.product);
        return(
            <li className="products-list-item">
                {this.state.edit || this.props.product.Product_name === null ?
                    <form onSubmit={this.submitHandler}>
                        {this.renderInputs()}
                        <Button
                            typeBtn="btn btn-success"
                            submitButton="submit"
                        >Сохранить</Button>
                    </form>
                    :
                    <div className="product-header">
                        <p>Продукт: <span className="product-price">{this.props.product.Product_name}</span></p>
                        <p>Количество: <span className="product-price">{this.props.product.Product_amount}</span> </p>
                    </div>
                }
                    {this.state.edit || this.props.product.Product_name === null ?
                     null
                        :    <div className="buttons">
                            <Button
                                typeBtn="btn btn-success"
                                submitButton="submit"
                                onClick={()=>this.fetchEditProductStart()}
                            >Изменить</Button>
                            <Button
                                typeBtn="btn btn-danger"
                                onClick={()=>this.props.fetchDeleteProduct(this.props.product.Product_id)}
                            >Удалить</Button>
                        </div>
                    }
            </li>
        )
    }
}
function mapStateToProps(state) {
    return{

    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchUpdateProduct:(product) => dispatch(fetchUpdateProduct(product)),
        fetchDeleteProduct:(id) => dispatch(fetchDeleteProduct(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product);