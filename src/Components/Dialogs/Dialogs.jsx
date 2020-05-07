import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messagesElements =
        props.state.messages.map(m => <Message
            message={m.message}
            dispatch={props.dispatch} />);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder="Enter your message" onChange={onMessageChange} value={props.state.newMessageText}></textarea>
                    </div>
                    <div>
                        <button className={classes.btn} onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;