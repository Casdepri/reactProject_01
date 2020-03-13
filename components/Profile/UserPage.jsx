import React from 'react';
import style from './UserPage.module.css';

class UserPage extends React.Component {
	render = () => {
		return (
			<div className={style.info}>
				<div className={style.UserPage1}>
					<div className={style.name}>{this.props.userName}</div>
					<div className={style.selfInfo}>
						<div>Date of Bird: {this.props.userDateB}</div>
						<div>City: {this.props.userCity}</div>
						<div>Education: {this.props.userEdu}</div>
						<div>Web-site: {this.props.userWebSite}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UserPage;