import PostedPosts from './PostedPosts';
import { connect } from 'react-redux';
import { updatePostCreator, addPostCreator } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {	
		updateTextPost: (text) => {
			dispatch(updatePostCreator(text));
		},
		addPost: () => {
			dispatch(addPostCreator());
		}
	}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostedPosts);

export default PostsContainer; 