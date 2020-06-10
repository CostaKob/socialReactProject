import React, { useState, useEffect } from 'react';
import classes from './Profile.module.css';

// let arr = [0, () => {}]; destructuring assigment
// let [a, setA] = arr;

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);  // Use State returns [a, setA]
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]); // after render

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusThunk(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status:</b><span onDoubleClick={activateEditMode}>{props.status || "----------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;