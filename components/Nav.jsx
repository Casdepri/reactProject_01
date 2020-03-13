import React from 'react';
import style from './css/Nav.module.css';

class Nav extends React.Component {
	render = () => {
		return (
			<nav className={style.nav}>
				<div className={style.item}><a href="javascript://">Profile</a></div>
				<div className={style.item}><a href="javascript://">Messages</a></div>
				<div className={style.item}><a href="javascript://">Music</a></div>
				<div className={style.item}><a href="javascript://">Friends</a></div>
				<div className={style.item}><a href="javascript://">Settings</a></div>
			</nav>
		)
	}
}

export default Nav;