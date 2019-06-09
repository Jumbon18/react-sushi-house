import React from 'react';
import './Auth.css';
import {connect} from "react-redux";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from 'is_js';
import {auth} from "../../store/actions/auth";

class Auth extends React.Component {
    _isMounted = false;
    state = {
        errorAuth: false,
        isFormValid: false,
        formControl: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                placeholder: 'Enter your email',
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

    submitHandler = async event => {
        this._isMounted = true;
        try {
            event.preventDefault();
            const user = await this.props.auth(this.state.formControl.email.value,
                this.state.formControl.password.value);
            //    window.location = `/admin`
        } catch (e) {
            this.setState({
                errorAuth: true
            });
        }

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
            formControl, isFormValid
        })

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

    render() {
        return (
            <div className={'Auth'}>
                <div className="alert alert-danger invalid-Auth" id="errorMessage" role="alert">

                </div>
                <div>
                    <h1>Login</h1>
                    <form onSubmit={this.submitHandler} className={'AuthForm'}>
                        <div>{this.renderInputs()}</div>
                        <div className="auth-buttons mt-5">
                            <Button
                                typeBtn="btn btn-outline-primary login-btn"
                                submitButton="submit"
                            >Sign In</Button>
                            <a href="/auth/signup">
                                <Button typeBtn="btn btn-outline-success login-btn">Sign up</Button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password) => dispatch(auth(email, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);