import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

class Dialogs extends React.Component {
    render = () => {
        let dialogsElements = this.props.messagePage.dialogsData.map(dialogs => <Dialog avatar={null} name={dialogs.name} id={dialogs.id} />);
        let messageElements = this.props.messagePage.messageData.map(message => <Message avatar={null} message={message.message} user={message.user} />);
    
        let textMessage = React.createRef();
    
        let addMessage = () => {
            this.props.addMessage();
        }
    
        let onMessageChange = () => {
            let text = textMessage.current.value;    
            this.props.onMessageChange(text);    
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
                    <textarea ref={textMessage} placeholder="Введите сообщение..." value={this.props.messagePage.newMessageText} onChange={onMessageChange}></textarea>
                    <div className={style.sendMessage}>
                        <button onClick={addMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialogs;