import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/HeaderContainer';
import ProfileContainer from './components/ProfileContainer';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import UsersContainer from './components/UsersContainer';
import LoginContainer from './components/LoginContainer';
import { Route, withRouter } from "react-router-dom";
import NavContainer from './components/Nav/NavContainer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializedApp } from './redux/appReducer';
import { acceptAuth } from './redux/authReducer';
import Preloader from './components/Preloader';

class App extends Component {

	componentDidMount() {
		this.props.initializedApp()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return <div className="container">
			<HeaderContainer />
			<NavContainer />
			<div className="content">
				<Route path="/login"
					render={() => <LoginContainer />} />
				<Route path={"/profile/:userId?"}
					render={() => <ProfileContainer />} />
				<Route path="/dialogs"
					render={() => <DialogsContainer />} />
				<Route path="/news"
					render={() => <News />} />
				<Route path="/music"
					render={() => <Music />} />
				<Route path="/settings"
					render={() => <Settings />} />
				<Route path="/users"
					render={() => <UsersContainer />} />
				<Route path="/friends"
					render={() => <Friends />} />
			</div>
			<Footer />
		</div>
	}
}

let mapstateToProps = (state) => {
	return {
		initialized: state.app.initialized
	}
}

export default compose(
	withRouter,
	connect(mapstateToProps, { initializedApp, acceptAuth })
)(App);
