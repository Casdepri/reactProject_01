import React from 'react';
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';

const Nav = (props) => {
	let pathData = props.sidebar.links.map(path => <div className={style.item}><NavLink to={path.path}>{path.name}</NavLink></div>);

	return (
		<nav className={style.nav}>
			{pathData}
			{/* <Friends friend={props.friend} /> */}
		</nav>
	)
}

export default Nav;