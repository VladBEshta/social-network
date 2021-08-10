import React from "react";
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from "../Formik/FormikControl";
import {connect} from "react-redux";
import {loginTC} from "../../redux/state/auth-reducer";
import {Redirect} from "react-router-dom";

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        serverError: state.auth.serverError
    }
}

const Login = (props) => {
    const initialValues = {
        email: '',
        password: '',
        rememberMe: false
    }
    const onSubmit = values => {
        props.loginTC(values.email, values.password, values.rememberMe)
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required').email('Incorrect email format'),
        password: Yup.string().required('Required')
    })

    if (props.isAuth) return <Redirect to='/profile'/>

    return (
        <div>
            <h1>Login</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {formik => (
                    <Form>
                        <FormikControl
                            control='input'
                            type='name'
                            label='Email'
                            name='email'/>
                        <FormikControl
                            control='input'
                            type='password'
                            label='Password'
                            name='password'/>
                        <FormikControl
                            control='checkbox'
                            type='checkbox'
                            label='Remember me'
                            name='rememberMe'/>
                        <button type='submit'>Login</button>
                    </Form>)}
            </Formik>
        </div>)
}
export default connect(mapStateToProps, {loginTC})(Login)