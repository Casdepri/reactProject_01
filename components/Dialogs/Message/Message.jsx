import React from 'react';
import style from './../Dialogs.module.css';

const Message = (props) => {
    let pathAvatar = "https://image.freepik.com/free-vector/_73950-151.jpg";
    
    return (
        <div className={style.item}>
            <div className={style.dialogAvatar}><img src={pathAvatar} alt={props.name} /></div>
            <div className={style.message}>{props.message}</div>
        </div>
    )
}

export default Message;