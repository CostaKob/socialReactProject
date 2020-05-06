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

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText}></textarea>
                <div className={classes.btn}><button onClick={addMessage}>Add new message</button></div>
                <span className={classes.messageText}>{messagesElements}</span>
            </div>
        </div>
    )
}

export default Dialogs;