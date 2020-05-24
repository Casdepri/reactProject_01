import { connect } from 'react-redux';
import { togglePrewPage, toggleNextPage, setCountUserOnPage, setPageNumberWhenChange, acceptFollow } from '../redux/usersReducer';
import { getUserss, getPageSize, getTotalUsersCount, getCurrentPage, getFirstDisplaPage, getMaxDisplayPage, getIsFetching, getFollowinInProgress } from '../redux/userSelector'
import UsersAPIContainer from './Users/UsersAPIContainer';
import { compose } from 'redux';

let mapStateToPros = (state) => {
	return {
		users: getUserss(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		firstDisplaPage: getFirstDisplaPage(state),
		maxDisplayPage: getMaxDisplayPage(state),
		isFetching: getIsFetching(state),
		followinInProgress: getFollowinInProgress(state),
	}
}

export default connect(mapStateToPros, { togglePrewPage, toggleNextPage, setCountUserOnPage, setPageNumberWhenChange, acceptFollow})(UsersAPIContainer)