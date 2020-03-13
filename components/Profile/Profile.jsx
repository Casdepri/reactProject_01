import React from 'react';
import style from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import UserPage from './UserPage';

class Content extends React.Component {
	render = () => {
		return (
			<div>
				<div className={style.bgProfile}><img src="https://trikky.ru/wp-content/blogs.dir/1/files/2018/10/07/random-pattern-pro-preview-590-590x300.png" /></div>
				<div className={style.info}>
					<div className={style.avatar}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYkflEQWLH5gOAEChBRsN0R11n1by_3c24sJRAcGumVARrZ1-k" /></div>
					<UserPage userDateB="14 april" userCity="Msk" userEdu="TUSUR" userWebSite="nope :(" />
				</div>

				<PostsContainer />
			</div>
		)
	}
}

export default Content;