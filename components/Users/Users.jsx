import React from 'react';
import style from './Users.module.css';

import { NavLink } from 'react-router-dom';
import { Pagination } from '../common/Pagination';

let Users = (props) => {
	let countShowPages = Math.ceil(props.totalUsersCount / props.pageSize);
	let arrayT = [];

	for (let i = props.firstDisplaPage; i <= props.maxDisplayPage; i++) {
		arrayT.push(i);
	}
	
	return (
		<div>
			<Pagination  togglePrewPage={props.togglePrewPage} toggleNextPage={props.toggleNextPage} currentPage={props.currentPage} onPageChanged={props.onPageChanged} externalObject={arrayT}/>
			<div className={style.userItems}>
				{
					props.users.map(u =>
						<div className={style.userItem} key={u.id}>
							<div className={style.userLeft}>
								<NavLink to={"/profile/" + u.id}>
									<div className={style.userPhoto}>
										<img src={u.photos.small != null ? u.photos.small : "https://img.icons8.com/bubbles/344/user.png"} alt="" />
										<span className={style.userName}>{u.name}</span>
									</div>
								</NavLink>
								<button disabled={props.followinInProgress.some(id => id === u.id)} onClick={() => { props.appFollowing(u.id) }}>{u.followed === true ? "Unfollow" : "Follow"}</button>

							</div>
							<div className={style.userRight}>
								<div className={style.userInfo}>
									<div className={style.userStatus}>
										<p>{u.status}</p>
									</div>
									<div className={style.userLocation}>
										<div className={style.userCity}>{u.userLocation.cityName}</div>
										<div className={style.userCountry}>{u.userLocation.countryName}</div>
									</div>
								</div>
							</div>
						</div>
					)
				}
			</div>
		</div>
	)
}

export default Users;