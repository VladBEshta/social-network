import React, {useState} from "react";
import styles from "./Users.module.css"
import cn from "classnames"

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let u = 1; u <= pagesCount; u++) {
        pages.push(u)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortion] = useState(1)
    const leftPortionPage = (portionNumber - 1) * portionSize + 1
    const rightPortionPage = portionNumber * portionSize

    return <div className={styles.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortion(portionNumber - 1)
        }}>PREV</button>}

        {pages
            .filter(p => p >= leftPortionPage && p <= rightPortionPage)
            .map(p => <span className={cn({
                [styles.selectedPage]: currentPage === p
            }, styles.pageNumber)}
                            key={p}
                            onClick={e => onPageChange(p)}>{p}</span>)}

        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortion(portionNumber + 1)
        }}>NEXT</button>}
    </div>
}

export default Paginator