import React from 'react';
import style from './Post.module.css';

class Post extends React.Component {
	render = () => {
		return (
			<div className={style.postItems}>
				<div className={style.item}>
					<div className={style.avatar}><img src="https://image.freepik.com/free-vector/_73950-151.jpg" /></div>
					<div className={style.publication}>
						<div className={style.postText}>
							{this.props.message}
							<div className={style.postLike}>{this.props.likeCount}</div>
							</div>
						</div>
				</div>
			</div>
		)
	}
}

export default Post;