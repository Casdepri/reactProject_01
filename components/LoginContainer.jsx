import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { required, wrongDataCreator } from './utils/validators';
import { Input } from './common/FormsControl/FormsControl';
import { Redirect, withRouter } from 'react-router-dom';
import { acceptAuth, signIn, signOut } from '../redux/authReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import style from './css/Login.module.css';

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} className={style.loginForm}>
                {props.error &&
                    <div className={style.tooltipError}>
                        {props.error}
                    </div>
                }

                <div>
                    <label htmlFor="login">Login</label><br />
                    <Field name={"login"} component={Input} type={"text"} placeholder={"Login"} validate={[required, wrongDataCreator]} />
                </div><br />
                <div>
                    <label htmlFor="password">Password</label><br />
                    <Field name={"password"} component={Input} type={"text"} placeholder={"Password"} validate={[required, wrongDataCreator]} />
                </div><br />
                <div>
                    <label htmlFor="rememberMe">Remember me</label>
                    <Field name={"rememberMe"} component={"input"} type={"checkbox"} />
                </div><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);


const LoginContainer = (props) => {
    const onSubmit = (formData) => {
        props.signIn(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

let mapstateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        rememberMe: state.auth.rememberMe,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    withRouter,
    connect(mapstateToProps,
        { acceptAuth, signIn, signOut })
)(LoginContainer);