import React from 'react';
import './DishCreator.css';
import {connect} from "react-redux";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import {NavLink, Redirect} from "react-router-dom";
import NewDishCreator from "../../components/NewDishCreator/NewDishCreator";
import {fetchDish} from "../../store/actions/dish";

class DishCreator extends React.Component{
    state = {
        success:false,
        formControl: {
            dish_name: {
                value: '',
                type: 'text',
                label: 'Название блюда',
                placeholder: 'Ролл Унаги',
                errorMessage: 'Enter the proper name'
            },
            weight: {
                value: '',
                type: 'text',
                label: 'Вес блюда',
                placeholder: '200'
            },
            price: {
                value: '',
                type: 'text',
                label: 'Цена блюда',
                placeholder: 'example@gmail.com',
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
        const products  = this.props..map((el,index)=>{
                return {Dish_id:el.Dish_id,dish_amount:el.dish_amount};
            }
        );
        const newDish = {
            Dish_name: this.state.formControl.dish_name,
            Dish_weight: this.state.formControl.weight,
            Dish_price: this.state.formControl.email.value
        };

        this.props.fetchLoadToAdmin(newDish);
        //this.setState({success:!this.state.success});
    };

    render() {

        return (
            <div className={'dishCreator'}>
                { this.props.likedDishData.length > 0 ?
                    <div className={"order_redactor_creator"}>
                        <h1>Оформление заказа</h1>
                        <form onSubmit={this.submitHandler}>
                            <div>
                                {this.renderInputs()}
                            </div>

                            <h3> Информация о блюдах</h3>
                            <NewDishCreator
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
                                typeBtn="btn btn-outline-primary btn-save"
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
    return {
        fetchDish:(id) => dispatch(fetchDish(id)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DishCreator);