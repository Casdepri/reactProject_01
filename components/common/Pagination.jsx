import React from 'react';
import style from './Pagination.module.css';

export const Pagination = ({togglePrewPage, toggleNextPage, currentPage, onPageChanged, externalObject}) => {
    return <div>
        <span onClick={togglePrewPage}>Prew </span>
        <span>
            {externalObject.map(p => {
                return <span className={p === currentPage && style.active}
                    onClick={() => { onPageChanged(p); }}>
                    <span className={style.page}>{p}</span>
                </span>
            })}
        </span>
        <span onClick={toggleNextPage}> Next</span>
    </div>
}