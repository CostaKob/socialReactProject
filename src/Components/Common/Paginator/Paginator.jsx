import React, { useState } from 'react';
import classes from './Paginator.module.css';

export const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChange, portionSize=10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.paginator}>
            { portionNumber > 1 &&
            <button onClick={ () => {setPortionNumber(portionNumber - 1) }}>Prev</button>}
        
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => { 
                    return <span onClick={(e) => {
                        onPageChange(p)
                    }}
                        className={currentPage === p ? classes.selectedPage : classes.pageNumbers}>
                        {p + " "}
                    </span>
                
            })}
            { portionCount > portionNumber &&
            <button onClick={ () => {setPortionNumber(portionNumber + 1) }}>Next</button>}
        </div>
    )
};