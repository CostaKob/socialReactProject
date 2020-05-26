import React from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
    return (
            <form onSubmit={ props.handleSubmit }>
                <div>
                    <Field component={"input"} name={"login"} placeholder={"Login"}  />
                </div>
                <div>
                    <Field component={"input"} name={"password"} placeholder={"Password"} />
                </div>
                <div>
                    <Field component={"input"} name={"rememberMe"} type={"checkbox"} />Remember me
                    </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm ( { form: 'login' } ) (LoginForm) // <----handleSubmit in props

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}



export default Login;