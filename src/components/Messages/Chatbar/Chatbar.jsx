import React from 'react';
import classes from './Chatbar.module.css';
import Chat from "./Chat/Chat";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControl";
import {maxLengthCreator, required} from "../../../utils/validation/validators";


const Chatbar = (props) => {
    let messageElements = props.messagesPage.messages.map(m => <Chat message={m.message} avatar={m.ava} id={m.id}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
        values.newMessageBody = ''
    }

    return (
        <div className={classes.chatbar}>
            {messageElements}
            <div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field className={classes.sms} component={Textarea} name={'newMessageBody'}
                       placeholder={'Enter your message...'} validate={[required, maxLength]}/>
            </div>
            <div>
                <button className={classes.chatSend}>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Chatbar;