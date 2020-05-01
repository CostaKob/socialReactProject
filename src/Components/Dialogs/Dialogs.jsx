import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Costa
                </div>
                <div className={classes.dialog}>
                    Dasha
                </div>
                <div className={classes.dialog}>
                    Yuli
                </div>
                <div className={classes.dialog}>
                    Diana
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi, What are you doing?
                </div>
                <div className={classes.message}>
                    What's up ?
                </div>
                <div className={classes.message}>
                    Hello world!
                </div>
            </div>
        </div>
    )
}

export default Dialogs;