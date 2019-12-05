import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <div>
        <h1>LOGIN</h1>
        <form onSubmit={props.handleSubmit}>
            < div>
                <Field placeholder={"Log In"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"pass"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"}  type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'Log In'})(LoginForm)



const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;