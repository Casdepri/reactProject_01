import React, { useState } from 'react';
import style from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import { useEffect } from 'react';

const Profile = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	let updateUserStatus = (status) => {
		let text = statusValue.current.value;
		props.updateUserStatus(text);
		setEditMode(false);
	}

	let updateSelfPhoto = (urlPhoto) => {
		if (urlPhoto.target.files.length) {
			props.updateSelfPhoto(urlPhoto.target.files[0]);
		}
	}

	let onStatusChange = (e) => { setStatus(e.currentTarget.value) }

	let enableEditMode = () => { setEditMode(true) };

	let statusValue = React.createRef();
	console.log(props.profile)
	return (
		<div>
			<div className={style.bgProfile}><img src="https://trikky.ru/wp-content/blogs.dir/1/files/2018/10/07/random-pattern-pro-preview-590-590x300.png" alt="nope" /></div>
			<div className={style.info}>
				<div className={style.avatar}><img src={!!props.profile.data.photos.large ? props.profile.data.photos.large : "https://img.icons8.com/bubbles/344/user.png"} alt="" /></div>
				<input type="file" onChange={updateSelfPhoto} />
				<div className={style.info}>
					<div className={style.UserPage1}>
						<div className={style.name}>{props.profile.fullName}</div>
						<div className={style.selfInfo}>
							<div>Обо мне: {props.profile.aboutMe}</div>
							<div>Web-site: {props.profile.website}</div>
							<div>Запись: {props.profile.lookingForAJobDescription}</div>
							<div>Статус:
								{!editMode &&
									<span className={style.currentStatus} onClick={enableEditMode}> {props.status}</span>
								}
								{editMode &&
									<input onBlur={updateUserStatus} ref={statusValue} value={status} onChange={onStatusChange} autoFocus />
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			<PostsContainer profile={props.profile} />
		</div>
	)
}

export default Profile;