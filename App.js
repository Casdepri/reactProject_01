import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import { Route } from "react-router-dom";
import NavContainer from './components/Nav/NavContainer';

const App = (props) => {

	return (
		<div className="container">
			<Header />
			<NavContainer />
			<div className="content">
				<Route path={"/profile"} render={() => <Profile />} />

				<Route path="/dialogs" render={() => <DialogsContainer />} />

				<Route path="/news"
					render={() => <News />} />
				<Route path="/music"
					render={() => <Music />} />
				<Route path="/settings"
					render={() => <Settings />} />
				<Route path="/friends"
					render={() => <Friends />} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
