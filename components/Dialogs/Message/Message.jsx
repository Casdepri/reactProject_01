import React from 'react';
import style from './../Dialogs.module.css';

class Message extends React.Component {
    render = () => {
        let pathAvatar = "https://image.freepik.com/free-vector/_73950-151.jpg";
    
        return (
            <div className={style.item}>
                <div className={style.dialogAvatar}><img src={pathAvatar} alt={this.props.name} /></div>
                <div className={style.message}>{this.props.message}</div>
            </div>
        )
    }
}

export default Message;