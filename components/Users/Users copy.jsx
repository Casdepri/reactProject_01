import React from 'react';
import style from './Users.module.css';
import * as axios from "axios"

const Users = (props) => {

	if (props.usersPage.users.length === 0) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => 
		props.setUsers(response.data.items)
		);
	}

	return (
		<div className={style.users}>
			{
				props.usersPage.users.map(u =>
					<div className={style.userItem}>
						<div className={style.userLeft}>
							<div className={style.userPhoto}>
								<img src={u.photos.small != null ? u.photos.small : "https://img.icons8.com/bubbles/344/user.png" } alt="" />
								<span className={style.userName}>{u.name}</span>
							</div>
							{u.userFollowed ?
								<button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
								<button onClick={() => { props.follow(u.id) }}>Follow</button>
							}
						</div>
						<div className={style.userRight}>
							<div className={style.userInfo}>
								<div className={style.userStatus}>
									<p>{u.status}</p>
								</div>
								<div className={style.userLocation}>
									<div className={style.userCity}>"u.userLocation.cityName"</div>
									<div className={style.userCountry}>"u.userLocation.countryName"</div>
								</div>
							</div>
						</div>
					</div>
				)
			}
		</div>
	)
}

export default Users;