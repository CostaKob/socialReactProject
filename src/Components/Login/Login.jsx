import React from 'react';
import classes from '../Common/FormsControls/FormsControls.module.css';
import { reduxForm } from 'redux-form';
import { Input, createField } from '../Common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("E-mail", "email", [required], Input)}
            {createField("Password", "password", [required], Input, { type: "password" })}
            {createField(null, "rememberMe", [], Input, { type: "checkbox" }, "Remember Me")}
            
            { captchaUrl && <img src={captchaUrl} />}
            { captchaUrl &&  createField("Symbols from image", "captcha", [required], Input) }
            

            {
            error && 
            <div className={classes.formSummaryError}>
                {error}
            </div>
            }

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm) // <----handleSubmit in props

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login Page</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, { login })(Login);