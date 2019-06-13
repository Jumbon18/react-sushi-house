import React from 'react';
import './SignUp.css';
import {connect} from "react-redux";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from 'is_js';
import validator from 'validator';
import {auth, signUp} from "../../store/actions/auth";
import {Redirect} from "react-router-dom";


class SignUp extends React.Component {
    state={
        formControl: {
            firstName: {
                value: '',
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
            secondName: {
                value: '',
                type: 'text',
                label: 'Second Name',
                placeholder: 'Ivanov',
                errorMessage: 'Enter the proper surname',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    surname:true
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
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                placeholder: 'Enter your password',
                errorMessage: 'Enter the proper password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
            phone_number:{
                value: '',
                type: 'text',
                label: 'Phone number',
                placeholder: 'Enter the phone number',
                errorMessage: 'Enter the proper phone number',
                valid: false,
                touched: false,
                validation: {
                    phone:true,
                    required: true
                }
            }
        }
    };

    validateControl(value, validation) {
        if (!validation) {
            return true;
        }
        let isValid = true;
        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (validation.email) {
            isValid = is.email(value) && isValid;
        }
        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid;
    }
    submitHandler = async(e)=>{
        e.preventDefault();
        const user = {
            Email:this.state.formControl.email.value,
            Password: this.state.formControl.password.value,
            lastName: this.state.formControl.secondName.value,
            Phone_number: this.state.formControl.phone_number.value,
            firstName: this.state.formControl.password.value,
        };
        this.props.signUp(user);

    };


    onChangeHandler = (event, controlName) => {

        const formControl = {...this.state.formControl};
        const control = {...formControl[controlName]};
        control.value = event.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControl[controlName] = control;
        let isFormValid = true;
        Object.keys(formControl).forEach(name => {
            isFormValid = formControl[name].valid && isFormValid;

        });
        this.setState({
            formControl,isFormValid
        })

    };

    renderInputs(){
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
render(){
    return(
    <div className={'SignUp'}>
        <div>
            {this.props.token ? <Redirect to={'/menu'}/> : null}
            <form onSubmit={this.submitHandler} className="auth-form signup">
               <div>{this.renderInputs()}</div>
                <div className="auth-buttons mt-5">
                    <Button submitButton="submit" typeBtn="btn-block btn btn-primary">Sign up</Button>
                </div>

            </form>
        </div>

    </div>
    )
}
}

function mapStateToProps(state) {
    return {
        token:state.auth.token
    }
}
function mapDispatchToProps(dispatch) {
    return {
        signUp: (user) => dispatch(signUp(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);