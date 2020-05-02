import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements =
        props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);

    let messagesElements =
        props.state.messages.map(m => <Message message={m.message} />);
        console.log(messagesElements);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;