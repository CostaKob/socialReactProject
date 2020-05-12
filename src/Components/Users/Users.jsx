import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
    if (props.users.length === 0){

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            props.setUsers(response.data.items);
        });

        // props.setUsers(
        //     [
        //         { id: 1, firstName: 'Costa', lastName: 'Kobrinsky', status: 'Hello hello', location: { city: 'Nahariya', country: 'Israel' }, followed: false, img: 'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg' },
        //         { id: 2, firstName: 'Darya', lastName: 'Petrov', status: 'I am OK', location: { city: 'Hadera', country: 'Israel' }, followed: true, img: 'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg' },
        //         { id: 3, firstName: 'Diana', lastName: 'Cohen', status: 'I am painting', location: { city: 'Haifa', country: 'Israel' }, followed: false, img: 'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg' },
        //         { id: 4, firstName: 'Yuli', lastName: 'Sidorov', status: 'I am playing', location: { city: 'Akko', country: 'Israel' }, followed: true, img: 'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg' },
        //         { id: 5, firstName: 'Lena', lastName: 'Israeli', status: 'Hello world', location: { city: 'Jerusalem', country: 'Israel' }, followed: false, img: 'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg' },
        //         { id: 6, firstName: 'Borya', lastName: 'Smith', status: 'How are you today?', location: { city: 'Atlit', country: 'Israel' }, followed: true, img: 'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg' },
        //         { id: 7, firstName: 'Natasha', lastName: 'Doe', status: 'Looking for a job', location: { city: 'Tel Aviv', country: 'Israel' }, followed: false, img: 'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg' }
        //     ]
    
        // );
    } 
    return <div>
        {
            props.users.map( (u) => 
            <div key={u.id}>
                    <span>
                        <div className={classes.user}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </div>
                        <div>
                            { u.followed 
                                ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button> 
                                : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
                            }
                        </div>
                    </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{"u.lastName"}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}
export default Users;