import React from 'react';
import Users from './Users';
import Preloader from '../Preloader';

// class UsersAPIContainer extends React.Component {
// 	componentDidMount() {
// 		this.props.setPageNumberWhenChange(1);
// 	}

// 	onPageChanged = (pageNumber) => {
// 		this.props.setPageNumberWhenChange(pageNumber, this.props.pageSize);
// 		return pageNumber;
// 	}

// 	togglePrewPage = () => {
// 		let prew = this.props.firstDisplaPage;
// 		let next = this.props.maxDisplayPage;
// 		let currentPage = this.props.currentPage;
// 		if (prew !== 1) {
// 			prew--;
// 			next--;
// 			currentPage--;
// 			this.onPageChanged(currentPage);
// 			this.props.togglePrewPage(prew, next);
// 		}
// 	}

// 	toggleNextPage = () => {
// 		let prew = this.props.firstDisplaPage;
// 		let next = this.props.maxDisplayPage;
// 		let currentPage = this.props.currentPage;
// 		if (next !== 1) {
// 			prew++;
// 			next++;
// 			currentPage++;
// 			this.onPageChanged(currentPage);
// 			this.props.togglePrewPage(prew, next);
// 		}
// 	}

// 	appFollowing = (userId) => {
// 		this.props.acceptFollow(userId);
// 	}

// 	render() {
// 		return <>
// 			{this.props.isFetching ? <Preloader /> : <Users {...this.props} appFollowing={this.appFollowing} onPageChanged={this.onPageChanged} togglePrewPage={this.togglePrewPage} toggleNextPage={this.toggleNextPage} />}
// 		</>
// 	}
// }


const UsersAPIContainer = (props) => {
	
		props.setPageNumberWhenChange(1);

	let onPageChanged = (pageNumber) => {
		props.setPageNumberWhenChange(pageNumber, props.pageSize);
		return pageNumber;
	}

	let togglePrewPage = () => {
		let prew = props.firstDisplaPage;
		let next = props.maxDisplayPage;
		let currentPage = props.currentPage;
		if (prew !== 1) {
			prew--;
			next--;
			currentPage--;
			onPageChanged(currentPage);
			props.togglePrewPage(prew, next);
		}
	}

	let toggleNextPage = () => {
		let prew = props.firstDisplaPage;
		let next = props.maxDisplayPage;
		let currentPage = props.currentPage;
		if (next !== 1) {
			prew++;
			next++;
			currentPage++;
			onPageChanged(currentPage);
			props.togglePrewPage(prew, next);
		}
	}

	let appFollowing = (userId) => {props.acceptFollow(userId);}

	return props.isFetching ? <Preloader /> :
			<Users {...props} appFollowing={props.appFollowing} onPageChanged={props.onPageChanged}
				togglePrewPage={props.togglePrewPage} toggleNextPage={props.toggleNextPage} />
}

export default UsersAPIContainer;