import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {

    let message = props.message;

    let newMessage = React.createRef();

        let addMessage = () => {
          props.addMessage();
        };

    let onMessageChange = () => {

    };

    return (
        <div className={classes.message}>
            <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageText}></textarea>
            <span className={classes.messageText}>{message}</span>
            <div className={classes.btn}><button onClick={ addMessage }>Add new message</button></div>
            
        </div>
    )
}

export default Message;