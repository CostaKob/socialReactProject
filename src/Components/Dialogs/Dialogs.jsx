import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

    const addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    };
    
    if(!props.isAuth) return <Redirect to ={"/login"} /> ;

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" 
                validate={[required, maxLength50]} placeholder="Enter your message" />
            </div>
            <div>
                <button className={classes.btn}>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;