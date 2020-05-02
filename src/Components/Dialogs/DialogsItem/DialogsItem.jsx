import React from 'react';
import classes from './../Dialogs.module.css';
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

export default DialogsItem;