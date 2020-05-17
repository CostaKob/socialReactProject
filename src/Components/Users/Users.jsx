import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';



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
                                ? <button onClick={() => {
                                    // delete like get withCredentials SECOND param
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "b06971d9-611c-48a0-b181-a32de5e059d3"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                        });

                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    // in post request withCredentials THIRD param
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "b06971d9-611c-48a0-b181-a32de5e059d3"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                        });
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            {/* <div>{"u.lastName"}</div> */}
                            {/* <div>{u.status}</div> */}
                        </span>
                        <span>
                            {/* <div>{"u.location.country"}</div> */}
                            {/* <div>{"u.location.city"}</div> */}
                        </span>
                    </span>
                </div>)
        }
    </div>
}

export default Users;