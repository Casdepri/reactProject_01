import React from 'react';
import style from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/FormsControl/FormsControl';
import { required, maxLengthCreator } from '../utils/validators';

class Profile extends React.Component {
	state = {
		toggleEditMode: false,
		status: this.props.status
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value
		});
	}

	toggleActivateEditMode = () => {
		this.setState({
			toggleEditMode: true
		});
	}

	updateUserStatus = () => {
		let text = this.statusValue.current.value;
		this.props.updateUserStatus(text);
		this.toggleDiactivateEditMode();
	}

	toggleDiactivateEditMode = () => {
		this.setState({
			toggleEditMode: false
		});
	}

	statusValue = React.createRef();

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}

	}

	render() {
		return (
			<div>
				<div className={style.bgProfile}><img src="https://trikky.ru/wp-content/blogs.dir/1/files/2018/10/07/random-pattern-pro-preview-590-590x300.png" alt="nope"/></div>
				<div className={style.info}>
					<div className={style.avatar}><img src={this.props.profile.photos.large != null ? this.props.profile.photos.large : "https://img.icons8.com/bubbles/344/user.png"} alt="" /></div>
					<div className={style.info}>
						<div className={style.UserPage1}>
							<div className={style.name}>{this.props.profile.fullName}</div>
							<div className={style.selfInfo}>
								<div>Обо мне: {this.props.profile.aboutMe}</div>
								<div>Web-site: {this.props.profile.website}</div>
								<div>Запись: {this.props.profile.lookingForAJobDescription}</div>
								<div>Статус:
									{!this.state.toggleEditMode &&
										<span className="style.currentStatus" onClick={this.toggleActivateEditMode}>{this.props.status}</span>
									}
									{this.state.toggleEditMode &&
										<StatusReduxForm onSubmit={onSubmit} {...this.props} updateUserStatus={this.updateUserStatus} statusValue={this.statusValue} status={this.props.status} onStatusChange={this.onStatusChange} />
									}
								</div>
							</div>
						</div>
					</div>
				</div>

				<PostsContainer profile={this.props.profile} />
			</div>
		)
	}

}

{/* <Field name={"status"} component={Input} type="text" autoFocusonBlur={this.updateUserStatus}ref={this.statusValue}value={this.state.status}onChange={this.onStatusChange} /> */ }

const StatusForm = (props) => {

	// const maxLengthCreator30 = maxLengthCreator(30);
	
	return <form onSubmit={props.handleSubmit} {...props}>
		<Field name={"statusTextBody"} component={Input} type={"text"} blur={props.updateUserStatus} onBlur={props.updateUserStatus} ref={props.statusValue} value={props.status} onChange={props.onStatusChange} validate={[required]} autoFocus />
	</form>
}

const StatusReduxForm = reduxForm({ form: 'status' })(StatusForm);

const onSubmit = (formData) => {
	this.updateUserStatus();
}


export default Profile;