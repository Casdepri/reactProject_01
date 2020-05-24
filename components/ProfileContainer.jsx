import React from 'react';
import { connect } from 'react-redux';
import { getProfile, getUserStatus, updateUserStatus, updateSelfPhoto } from '../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import Profile from './Profile/Profile';
import { withAuthRedirect } from './hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	updateDataPhoto() {
		let userId = this.props.match.params.userId;
		let authUserId = this.props.myId;
		if (!userId) { userId = authUserId }
		this.props.getProfile(userId);
		this.props.getUserStatus(userId);
		console.log(this.props)
	}

	componentDidMount() {
		this.updateDataPhoto();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(prevProps.match.params.userId)
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.updateDataPhoto();
		}
	}



	render() {
		return this.props.profile ?
			<Profile {...this.props}
				profile={this.props.profile}
				getUserStatus={this.props.getUserStatus}
				updateUserStatus={this.props.updateUserStatus} />
			: () => { alert("Ошибка загрузки") }
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		myId: state.auth.userId,
		status: state.profilePage.status,
		isFetching: state.profilePage.isFetching,
	}
}

export default compose(
	withAuthRedirect,
	withRouter,
	connect(mapStateToProps, { getProfile, getUserStatus, updateUserStatus, updateSelfPhoto })
)(ProfileContainer);