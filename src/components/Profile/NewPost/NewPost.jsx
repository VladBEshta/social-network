import React from "react";
import './../../../App.css'
import {Form, Formik} from "formik";
import * as Yup from 'yup'
import FormikControl from "../../Formik/FormikControl";

const NewPost = (props) => {
    const initialValues = {
        newPostText: ''
    }
    const onSubmit = (values, onSubmitProps) => {
        console.log(values)
        props.addPostAction(values.newPostText)
        onSubmitProps.resetForm()
    }
    const validationSchema = Yup.object({})

    return (<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {formik =>
            (<Form>
                <FormikControl
                    control='textarea'
                    name='newPostText'
                />
                <button type='submit'>Create post</button>
            </Form>)}
    </Formik>)
}

export default NewPost