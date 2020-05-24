import React from 'react';
import style from './Post.module.css';

let Post = (props) => {
	return (
		<div className={style.postItems}>
			<div className={style.item}>
				<div className={style.avatar}><img src={props.profile != null ? props.profile : "https://img.icons8.com/bubbles/344/user.png"} alt="" /></div>
				<div className={style.publication}>
					<div className={style.postText}>
						{props.message}
						<div className={style.postLike}>{props.likeCount}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Post;