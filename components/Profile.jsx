import React from 'react';
import style from './css/Profile.module.css';

const Content = () => {
	return <content className="content">
		<div className={style.bgProfile}><img src="https://trikky.ru/wp-content/blogs.dir/1/files/2018/10/07/random-pattern-pro-preview-590-590x300.png" /></div>
		<div className={style.info}>
			<div className={style.avatar}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYkflEQWLH5gOAEChBRsN0R11n1by_3c24sJRAcGumVARrZ1-k" /></div>
			<div className={style.userInfo}>
				<div className={style.name}>Casdepri</div>
				<div className={style.selfInfo}>
					<div>Date of Bird: 14 April</div>
					<div>City: Msk</div>
					<div>Education: TUSUR</div>
					<div>Web-site: nope :(</div>
				</div>
			</div>
		</div>
		<div className={style.posts}>
			<div className={style.addPost}>
				<p>My posts</p>
				<div className={style.textarea}>you news...</div>
				<div className={`${style.btn} ${style.sendPost}`}>Send</div>
			</div>
			<div className={style.postItems}>
				<div className={style.item}>
					<div className={style.avatar}><img src="https://pythonru.com/wp-content/uploads/2018/12/random-module-icon.png" /></div>
					<div className={style.publication}>hey, why nobody love me?</div>
				</div>
				<div className={style.item}>
					<div className={style.avatar}><img src="https://pythonru.com/wp-content/uploads/2018/12/random-module-icon.png" /></div>
					<div className={style.publication}>hey, why nobody love me?</div>
				</div>
				<div className={style.item}>
					<div className={style.avatar}><img src="https://pythonru.com/wp-content/uploads/2018/12/random-module-icon.png" /></div>
					<div className={style.publication}>hey, why nobody love me?</div>
				</div>
			</div>

		</div>
	</content>
}

export default Content;