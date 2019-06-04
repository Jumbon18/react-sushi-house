import React from 'react';
import './OrderEditor.css';
import {connect} from "react-redux";
import Input from "../../components/UI/Input/Input";
import {fetchOrder} from "../../store/actions/admin";
import Button from "../../components/UI/Button/Button";


class OrderEditor extends React.Component {

    state = {
        formControl: {
            FIO: {
                value: this.props.location.state.fromOrder.name,
                type: 'text',
                label: 'First Name',
                placeholder: 'Ivan',
                errorMessage: 'Enter the proper name',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    name: true
                }
            },
            phone_number: {
                value: this.props.location.state.fromOrder.phone,
                type: 'text',
                label: 'Phone number',
                placeholder: '+(380)12-123-12-34',
                errorMessage: 'Enter the proper phone number',
                valid: false,
                touched: false,
                validation: {
                    phone: true,
                    required: true
                }
            },
            email: {
                value: this.props.location.state.fromOrder.email,
                type: 'email',
                label: 'Email',
                placeholder: 'test@abc.db',
                errorMessage: 'Enter the proper email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            address: {
                value: this.props.location.state.fromOrder.address,
                type: 'text',
                label: 'Адресс',
                placeholder: 'test@abc.db',
                errorMessage: 'Enter the proper email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            notes: {
                value: this.props.location.state.fromOrder.notes,
                type: 'text',
                label: 'Примечания',
                placeholder: 'test@abc.db',
                errorMessage: 'Enter the proper email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
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

    render() {
        const statusValues = ['Готовиться','Ожидание', 'В пути'];
        const paymentTypes = ['Наличный','Оплата картой'];
        console.log(this.props.location.state.fromOrder);
        return (
            <div className={'OrderEditor'}>
                {this.props.location.state.fromOrder ?
                    <div className={"order_redactor"}>
                        <h1>Order Editor {this.props.match.params.id}</h1>
                        <h3> Информация о блюдах</h3>

                        <h3>Информация о клиенте</h3>
                        <form onSubmit={this.submitHandler}>
                            <div>
                                {this.renderInputs()}
                            </div>
                            <span>{this.props.location.state.fromOrder.start}</span>
                            <br/>
                            <span>{this.props.location.state.fromOrder.end}</span>
                            <br/>

                            <span>{this.props.location.state.fromOrder.price}</span>
                            <br/>

                            <span>{this.props.location.state.fromOrder.Chef}</span>
                            <br/>

                            <span>{this.props.location.state.fromOrder.Courier}</span>

                            <select>
                                {statusValues.map((status,index)=>{
                                    return(
                                           <React.Fragment key={index}>
                                            {status === this.props.location.state.fromOrder.status ?
                                                <option selected value={index+1}>{status}</option>
                                                :
                                                <option value={index} >{status}</option>}
                                           </React.Fragment>
                                        )

                                })}
                            </select>

                            <select>
                                {paymentTypes.map((type,index)=>{
                                    return(
                                        <React.Fragment key={index}>
                                            {type === this.props.location.state.fromOrder.payment ?
                                                <option selected value={index+1}>{type}</option>
                                                :
                                                <option value={index} >{type}</option>}
                                        </React.Fragment>
                                    )

                                })}
                            </select>
                            <Button
                                typeBtn="btn btn-primary"
                                submitButton="submit"
                            >Сохранить</Button>
                        </form>

                    </div>

                    :
                    <h1>Упс... Заказа не существует</h1>
                }
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderEditor);