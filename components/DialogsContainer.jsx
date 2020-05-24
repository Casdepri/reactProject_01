import { addMessage} from '../redux/messageReducer';
import Dialogs from './Dialogs/Dialogs';
import { connect } from 'react-redux'
import { withAuthRedirect } from './hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }    
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage})
)(Dialogs);