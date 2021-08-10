import React from 'react'
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

const Checkbox = (props) => {
    const {label, name, ...rest} = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <Field type={name} id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default Checkbox