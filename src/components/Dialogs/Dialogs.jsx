import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import * as Yup from 'yup'
import {Formik, Form} from "formik";
import FormikControl from "../Formik/FormikControl";

const Dialogs = (props) => {
    const initialValues = {
        newMessage: '',
    }
    const validationSchema = Yup.object({})
    const onSubmit = (values, onSubmitProps) => {
        props.sendMessageAction(values.newMessage)
        onSubmitProps.resetForm()
    }

    let DialogItemElement = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let MessageItemElement = props.messages.map((m) => <Message id={m.id} message={m.message}/>)

    return (
        <div className="dialogs">
            <div className="dialogItems">
                {DialogItemElement}
            </div>
            <div className="message">
                <div>{MessageItemElement}</div>
                <div>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {formik => (
                            <Form>
                                <FormikControl
                                    control='textarea'
                                    name='newMessage'
                                />
                                <button type='submit'>Send message</button>
                            </Form>)}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
export default Dialogs