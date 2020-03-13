import React from 'react';
import style from './../Posts.module.css';
import Post from './Post';

class PostedPosts extends React.Component {
	render = () => {
		let newPostElement = React.createRef();

		let addPost = () => {
			this.props.addPost();
		}
	
		let updateTextPost = () => {
			let text = newPostElement.current.value;
			this.props.updateTextPost(text);
		}
	
		let postsElements = this.props.profilePage.postData.map(post => <Post message={post.message} likeCount={post.likeCount} />);
		return (
			<div>
				<div className={style.posts}>
					<div className={style.addPost}>
						<p>My posts</p>
						<div className={style.textarea}>
							<textarea ref={newPostElement} value={this.props.profilePage.newPostText} onChange={updateTextPost} placeholder="Введите сообщение..." />
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
}

export default PostedPosts;