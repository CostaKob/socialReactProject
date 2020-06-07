import React from 'react';
import classes from './Users.module.css';
import { Paginator } from '../Common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage, onPageChange, totalUsersCount, pageSize, users, ...props }) => {

    return (
        <div>
            <Paginator currentPage={currentPage}
                onPageChange={onPageChange}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize} />
            <div>
                {
                    users.map((u) => <User user={u}
                        followingInProgress={props.followingInProgress}
                        key={u.id}
                        unfollow={props.unfollow}
                        follow={props.follow} />
                    )
                }
            </div>
        </div>
    )
}

export default Users;