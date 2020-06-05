import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let User = ({ user, followingInProgress, follow, unfollow }) => {
    return (
        <div>
            <span>
                <NavLink to={'/profile/' + user.id} className={classes.user}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                </NavLink>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <div>{user.name}</div>
            </span>
        </div >

    )
}

export default User;