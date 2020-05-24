import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const DialogForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {/* <Field ref={props.textMessage} placeholder="Введите сообщение..." value={this.props.messagePage.newMessageText} onChange={props.onMessageChange} /> */}
        <Field name={"bodyMessage"} component={"input"} type={"text"} placeholder="Введите сообщение..." />
        <div className={style.sendMessage}>
            <button type="submit">Отправить</button>
        </div>
    </form>
}

const DialogReduxForm = reduxForm({ form: 'message' })(DialogForm);

class Dialogs extends React.Component {
    render = () => {
        let dialogsElements = this.props.messagePage.dialogsData.map(dialogs => <Dialog avatar={null} name={dialogs.name} id={dialogs.id} />);
        let messageElements = this.props.messagePage.messageData.map(message => <Message avatar={null} message={message.message} user={message.user} />);

        // let textMessage = React.createRef();

        // let addMessage = (text) => {
        //     this.props.addMessage(text);
        // }

        const onSubmit = (formData) => {
            this.props.addMessage(formData.bodyMessage);
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
                    <DialogReduxForm onSubmit={onSubmit} />
                    {/* <div className={style.sendMessage}>
                        <button onClick={addMessage}>Отправить</button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Dialogs;