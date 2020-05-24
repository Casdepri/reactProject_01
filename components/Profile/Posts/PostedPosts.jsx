import React from 'react';
import style from './../Posts.module.css';
import Post from './Post';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../utils/validators';
import { Textarea } from '../../common/FormsControl/FormsControl';

const maxLengthCreator15 = maxLengthCreator(15);
const minLengthCreator2 = minLengthCreator(2);

const PostForm = (props) => {
	return <form onSubmit={props.handleSubmit}>
		<div className={style.textarea}>
			<Field name={'postMessageBody'} propison={'test'} component={Textarea} type={'text'} placeholder={"Введите сообщение..."} validate={[required, maxLengthCreator15, minLengthCreator2]} />
		</div>
		<div className={`${style.btn} ${style.sendPost}`}>
			<button type="submit">Send</button>
		</div>
	</form>
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm)

const PostedPosts = React.memo(props => {
	const postsElements = props.profilePage.postData.map(post => <Post profile={props.profile.data.photos.large} message={post.message} likeCount={post.likeCount} />);

	const addPost = (text) => {
		props.addPostText(text);
	}

	const onSubmit = (formData) => {
		addPost(formData.postMessageBody)
	}

	return (
		<div>
			<div className={style.posts}>
				<div className={style.addPost}>
					<p>My posts</p>
					<PostReduxForm onSubmit={onSubmit} />
				</div>
			</div>
			{postsElements}
		</div>
	)
})

export default PostedPosts;