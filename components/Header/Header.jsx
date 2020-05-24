import React from 'react';
import style from './Header.module.css';

let Header = (props) => {
	return <header className={style.header}>
		<img src="https://img2.freepng.ru/20180315/vrq/kisspng-logo-lion-shutterstock-red-gradient-lionhead-5aab05d93512d0.9761940315211575932174.jpg" />
		<div className={style.loginBox}>
			{!props.isAuth ? "Login" : <div>{props.login} <br/> <input type="submit" value="Logout" onClick={props.signOut}/></div>}
		</div>
	</header>
}

export default Header;