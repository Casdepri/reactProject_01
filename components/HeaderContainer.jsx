import React from 'react';
import Header from './Header/Header';
import { connect } from 'react-redux';
import { signOut } from '../redux/authReducer';

class HeaderContainer extends React.Component {

	render = () => {
		return <Header {...this.props} />
	}
}

let mapstateToProps = (state) => {
	return {
		login: state.auth.login,
		isAuth: state.auth.isAuth
	}
}

export default connect(mapstateToProps, { signOut })(HeaderContainer);