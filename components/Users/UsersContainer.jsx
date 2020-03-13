import Users from './Users';
import { connect } from 'react-redux';
import { followUserAC, unfollowUserAC, setUsersAC } from '../../redux/usersReducer';

let mapStateToPros = (state) => {
	return {usersPage: state.usersPage}
}

let matDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followUserAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowUserAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		}
	}
}

export default connect(mapStateToPros, matDispatchToProps)(Users);