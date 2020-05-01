import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {

    let name = props.name,
        path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{name}</NavLink>
        </div>
    )
}

const Message = (props) => {

    let message = props.message;
    
    return (
        <div className={classes.message}>
            {message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>

                <DialogsItem name="Costa" id="1" />
                <DialogsItem name="Darya" id="2" />
                <DialogsItem name="Yuli" id="3" />
                <DialogsItem name="Diana" id="4" />
                <DialogsItem name="Vasya" id="5" />
                <DialogsItem name="Petya" id="6" />
            </div>
            <div className={classes.messages}>
                <Message message="Hi, how are you ?" />
                <Message message="What's up ?" />
                <Message message="Hello world !" />
                <Message message="My name is Costa" />
                <Message message="Whaaaat!??" />
                <Message message="Yo yo yo!!" />
            </div>
        </div>
    )
}

export default Dialogs;