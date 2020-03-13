import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.messagePage.dialogsData.map(dialogs => <Dialog avatar={null} name={dialogs.name} id={dialogs.id} />);
    let messageElements = props.messagePage.messageData.map(message => <Message avatar={null} message={message.message} user={message.user} />);

    let textMessage = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = textMessage.current.value;    
        props.onMessageChange(text);    
    }

    return (
        <div className={style.dialogPage}>
            <div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className={style.messageItems}>
                {messageElements}
            </div>
            <div className={style.addMessArea}>
                <textarea ref={textMessage} placeholder="Введите сообщение..." value={props.messagePage.newMessageText} onChange={onMessageChange}></textarea>
                <div className={style.sendMessage}>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;