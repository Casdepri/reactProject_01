import React from 'react';
import style from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let pathLink = "/dialogs/" + props.id;
    let pathAvatar = "https://image.freepik.com/free-vector/_73950-151.jpg";

    return (
        <div className={style.item}>
            <NavLink to={pathLink} activeClassName={style.active}>
                <div className={style.dialogAvatar}><img src={pathAvatar} alt={props.name} /></div>
                <div className={style.dialogName}>{props.name}</div>
            </NavLink>
        </div>
    )
}

export default Dialog;