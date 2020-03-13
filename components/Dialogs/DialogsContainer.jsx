import React from 'react';
import { addMessageCreator, updateMessageCreator } from '../../redux/messageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }    
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (text) => {
            dispatch(updateMessageCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;