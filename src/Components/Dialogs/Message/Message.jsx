import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {

    let message = props.message;

    let newMessage = React.createRef();

        let addMessage = () => {
          let text = newMessage.current.value;
          alert(text);
        }

    return (
        <div className={classes.message}>
            {message}
            <textarea ref={newMessage}></textarea>
            <button onClick={ addMessage }>Add new message</button>
        </div>
    )
}

export default Message;