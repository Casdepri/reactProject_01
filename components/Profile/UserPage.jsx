import React from 'react';
import style from './UserPage.module.css';

const UserPage = (props) => {
	return (
		<div className={style.info}>
			<div className={style.UserPage1}>
				<div className={style.name}>{props.userName}</div>
				<div className={style.selfInfo}>
					<div>Date of Bird: {props.userDateB}</div>
					<div>City: {props.userCity}</div>
					<div>Education: {props.userEdu}</div>
					<div>Web-site: {props.userWebSite}</div>
				</div>
			</div>
		</div>
	)
}

export default UserPage;