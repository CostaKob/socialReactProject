import React from 'react';
import classes from './Paginator.module.css';

export const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChange }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            {pages.map(p => {
                if (p <= 20) {
                    return <span onClick={(e) => {
                        onPageChange(p)
                    }}
                        className={currentPage === p && classes.selectedPage}>
                        {p + " "}
                    </span>
                }
            })}
        </div>
    )
};