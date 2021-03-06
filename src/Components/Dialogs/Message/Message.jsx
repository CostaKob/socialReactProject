import React from 'react';
import classes from './../Dialogs.module.css';

const Message = (props) => {

    let newMessage = React.createRef();
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

export default Message;