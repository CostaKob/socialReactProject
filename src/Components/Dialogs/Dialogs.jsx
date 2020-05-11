import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
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
                        <textarea placeholder="Enter your message" onChange={onMessageChange} value={state.newMessageText}></textarea>
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