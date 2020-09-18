import React, {useState} from "react";
import styles from './Paginator.module.css';

const Paginator = (props) => {
let portionSize = 10
    let pagesCount = Math.ceil(props.totalPageCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= pagesCount) {
            pages.push(i)
        }
    }

    let portionCount = Math.ceil(pagesCount/portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <button onClick={(e)=>{setPortionNumber(portionNumber - 1)}}>PREV</button>}
        {pages
            .filter(p=> p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
            return <span className={props.currentPage === p ? styles.selectedPage : styles.pageNumber}
                         onClick={(e) => {
                             props.onPageChanged(p)
                         }}>{p}</span>
        })}
        {portionCount > portionNumber &&
        <button onClick={(e)=>{setPortionNumber(portionNumber + 1)}}>NEXT</button>}
    </div>
}

export default Paginator;


