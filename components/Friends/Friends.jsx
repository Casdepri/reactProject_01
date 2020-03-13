import React from 'react';
import style from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
	let friendData = props.friend.friendList.map( friends => <NavLink to={friends.path + friends.id} className={style.item}>
		<div className={style.avatar}>
			<img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt={friends.name} />
			<span className={style.status}></span>
		</div>
		<span className={style.name}>{friends.name}</span>
	</NavLink> );

	return (
		<div className={style.friends}>
			<div className={style.items}>
				{friendData}
			</div>
		</div>
	)
}

export default Friends;