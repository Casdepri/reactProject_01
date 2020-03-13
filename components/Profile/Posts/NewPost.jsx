import React from 'react';
import style from './NewPost.module.css';


const NewPost = (props) => {
	let newPostElement = React.createRef();

	let addPost = () => {
		props.addPost();
	}

	let updateTextPost = () => {
		let text = newPostElement.current.value;
		props.updateTextPost(text);
	}
	
	return (
		<div className={style.posts}>
			<div className={style.addPost}>
				<p>My posts</p>
				<div className={style.textarea}>
					<textarea ref={newPostElement} value={props.newPostText} onChange={updateTextPost} placeholder="Введите сообщение..." />
				</div>
				<div className={`${style.btn} ${style.sendPost}`}>
					<button onClick={addPost}>Send</button>
				</div>
			</div>
		</div>
	)
}

export default NewPost; 