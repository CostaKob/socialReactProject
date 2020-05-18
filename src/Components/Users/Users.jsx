import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                if (p <= 20) {
                    return <span onClick={(e) => { props.onPageChange(p) }} className={props.currentPage === p && classes.selectedPage}>{p + " "}</span>
                }
            })}
        </div>
        {
            props.users.map((u) =>
                <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id} className={classes.user}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    // delete like get withCredentials SECOND param
                                    props.toggleFollowingInProgress(true, u.id);
                                    usersAPI.follow(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingInProgress(false, u.id);
                                        });
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    // in post request withCredentials THIRD param
                                    props.toggleFollowingInProgress(true, u.id);
                                    usersAPI.unfollow(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingInProgress(false, u.id);
                                        });
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                    </span>
                </div >
            )
        }
    </div >
}

export default Users;