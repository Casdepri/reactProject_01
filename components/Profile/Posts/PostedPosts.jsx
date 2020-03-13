import React from 'react';
import style from './../Posts.module.css';
import Post from './Post';

const PostedPosts = (props) => {
	console.log(props.profilePage);
	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	}

	let updateTextPost = () => {
		let text = newPostElement.current.value;
		props.updateTextPost(text);
	}

	let postsElements = props.profilePage.postData.map(post => <Post message={post.message} likeCount={post.likeCount} />);
	return (
		<div>
			<div className={style.posts}>
				<div className={style.addPost}>
					<p>My posts</p>
					<div className={style.textarea}>
						<textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={updateTextPost} placeholder="Введите сообщение..." />
					</div>
					<div className={`${style.btn} ${style.sendPost}`}>
						<button onClick={addPost}>Send</button>
					</div>
				</div>
			</div>
			{postsElements}
		</div>
	)
}

export default PostedPosts;