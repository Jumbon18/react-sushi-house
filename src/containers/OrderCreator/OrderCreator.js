import React from 'react';
import './OrderCreator.css';
import {connect} from "react-redux";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {NavLink, Redirect} from "react-router-dom";
import OrderCreateDish from "../../components/OrderCreateDIsh/OrderCreateDish";
import {fetchLoadToAdmin} from "../../store/actions/dish";
class OrderCreator extends React.Component{
    state = {
        success:false,
        payment:'Наличные',
        paymentValue:['Наличные','Оплата картой'],
        formControl: {
            FIO: {
                value: '',
                type: 'text',
                label: 'Имя и Фамилия',
                placeholder: 'Ivan Ivanov',
                errorMessage: 'Enter the proper name',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    name: true
                }
            },
            phone_number: {
                value: '',
                type: 'text',
                label: 'Телефон',
                placeholder: '+(380)99-123-12-34',
                errorMessage: 'Enter the proper phone number',
                valid: false,
                touched: false,
                validation: {
                    phone: true,
                    required: true
                }
            },
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                placeholder: 'example@gmail.com',
                errorMessage: 'Enter the proper email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            address: {
                value: '',
                type: 'text',
                label: 'Адресс',
                placeholder: 'Улица Сумская, 14, квартира 5',
                errorMessage: 'Enter the proper address',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            notes: {
                value: '',
                type: 'text',
                label: 'Примечания',
                placeholder: 'Примечания',
                errorMessage: 'Enter the proper data'
            },
            delivery:{
                value: '',
                type: 'text',
                label: 'Время доставки',
                placeholder: '18-00',
                errorMessage: 'Enter the proper data',
                valid: false,
                touched: false,
                validation: {
                    required: true
                }
            }
        }
    };

    renderInputs() {
        return Object.keys(this.state.formControl).map((controlName, index) => {
            const control = this.state.formControl[controlName];
            return (
                <Input
                    errorAuth={this.state.errorAuth}
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    label={control.label}
                    placeholder={control.placeholder}
                    onChange={(event) => this.onChangeHandler(event, controlName)}
                    styleInput="auth-input"
                />

            )
        });
    }

    onChangeHandler = (event, controlName) => {
        const formControl = {...this.state.formControl};
        const control = {...formControl[controlName]};
        control.value = event.target.value;
        control.touched = true;
        //control.valid = this.validateControl(control.value, control.validation);
        formControl[controlName] = control;
        /*  let isFormValid = true;
          Object.keys(formControl).forEach(name => {
              isFormValid = formControl[name].valid && isFormValid;

          });*/
        this.setState({
            formControl
        })
    };
    submitHandler =(e)=>{
        e.preventDefault();
        const dishes = this.props.likedDishData.map((el,index)=>{
                return {Dish_id:el.Dish_id,dish_amount:el.dish_amount};
            }
        );
        const order = {
            client_name: this.state.formControl.FIO.value.split(' ')[0],
            client_surname: this.state.formControl.FIO.value.split(' ')[1],
            client_email: this.state.formControl.email.value,
            client_phone: this.state.formControl.phone_number.value,
            Delivery_address: this.state.formControl.address.value,
            Delivery_time:this.state.formControl.delivery.value,
            Notes:this.state.formControl.notes.value,
            Payment_method: "Картой при получении",
            Order_status: "Ожидание",
            userUserId: 3,
            dishes
        };

        this.props.fetchLoadToAdmin(order);
    this.setState({success:!this.state.success});

    };

    render() {

        return (
            <div className={'OrderCreator'}>
                { this.props.likedDishData.length > 0 ?
                    <div className={"order_redactor_creator"}>
                        <h1>Оформление заказа</h1>
                        <form onSubmit={this.submitHandler}>
                            <div>
                                {this.renderInputs()}
                            </div>
                            <select value={this.state.payment}
                                    onChange={(e) => {
                                        console.log(e.target);
                                        this.setState({payment: e.target.value}
                                        )
                                    }}>
                                {this.state.paymentValue.map((payment,index)=>{
                                    return(
                                        <React.Fragment key={index}>
                                            {payment === this.state.payment ?
                                                <option selected value={payment}>{payment}</option>
                                                :
                                                <option value={payment} >{payment}</option>}
                                        </React.Fragment>
                                    )
                                })}
                            </select>
                            <h3> Информация о блюдах</h3>
                            <OrderCreateDish
                                likeList={this.props.likedDishData}
                                />
                            <Button
                                typeBtn="btn btn-outline-success btn-save"
                                submitButton="submit"
                            >Оформить заказ</Button>
                            <NavLink to={'/menu'}>
                                <Button
                                    typeBtn="btn btn-outline-primary btn-save"
                                >Продолжить покупки</Button>
                            </NavLink>
                        </form>
                    </div>
                    : <React.Fragment><h1>Ваша корзина пуста</h1>
                        <NavLink to={'/menu'}>
                            <Button
                                typeBtn="btn btn-primary btn-save"
                            >Продолжить покупки</Button>
                        </NavLink></React.Fragment>}
                {this.state.success ? <Redirect to={
                    {pathname: '/success/purchase',
                    state:{
                    fromOrder:{
                    FIO:this.state.formControl.FIO.value}}}
                }
                /> : null}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        likedDishData:state.dish.likedDishData
    }
}
function mapDispatchToProps(dispatch) {
    return{
        fetchLoadToAdmin:(order) => dispatch(fetchLoadToAdmin(order)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderCreator);