import PostedPosts from './PostedPosts';
import { connect } from 'react-redux';
import { addPostText } from '../../../redux/profileReducer';

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}

const PostsContainer = connect(mapStateToProps, { addPostText })(PostedPosts);

export default PostsContainer; 