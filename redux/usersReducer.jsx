import userAPI from "../API/API";

const FOLLOW = "follow_user";
const UNFOLLOW = "unfollow_user";
const SET_USERS = "set_users";
const SET_CURRENT_PAGE = "set_current_page";
const SET_TOTAL_USER_COUNT = "set_total_user_count";
const TOGGLE_PREW_PAGE = "toggle_prew_page";
const TOGGLE_NEXT_PAGE = "toggle_next_page";
const TOGGLE_FETCHING = "toggle_fetching";
const TOGGLE_FOLLOW = "toggle_follow";

export const follow = (userId, status) => { return { type: FOLLOW, userId, status } }
export const unfollow = (userId, status) => { return { type: UNFOLLOW, userId, status } }
export const setUsers = (users) => { return { type: SET_USERS, users } }
export const setCurrentPage = (currentPage) => { return { type: SET_CURRENT_PAGE, currentPage } }
export const setCountPages = (count) => { return { type: SET_TOTAL_USER_COUNT, count } }
export const togglePrewPage = (newFirst, newMaximum) => { return { type: TOGGLE_PREW_PAGE, newFirst, newMaximum } }
export const toggleNextPage = (newFirst, newMaximum) => { return { type: TOGGLE_NEXT_PAGE, newFirst, newMaximum } }
export const toggleFetching = (fetch) => { return { type: TOGGLE_FETCHING, fetch } }
export const toggleFollowProgress = (fetch, userId) => { return { type: TOGGLE_FOLLOW, fetch, userId } }

let initState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 50,
    currentPage: 1,
    firstDisplaPage: 1,
    maxDisplayPage: 7,
    isFetching: true,
    followinInProgress: []
}

const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS:            
            return {
                ...state, users: [...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case SET_TOTAL_USER_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }

        case TOGGLE_PREW_PAGE:
            return {
                ...state,
                firstDisplaPage: action.newFirst,
                maxDisplayPage: action.newMaximum
            }

        case TOGGLE_NEXT_PAGE:
            return {
                ...state,
                firstDisplaPage: action.newFirst,
                maxDisplayPage: action.newMaximum
            }

        case TOGGLE_FETCHING:
            return {
                ...state, isFetching: action.fetch
            }

        case TOGGLE_FOLLOW:
            return {
                ...state,
                followinInProgress: action.fetch ? [...state.followinInProgress, action.userId] : state.followinInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

export const setCountUserOnPage = (pageSize = 10) => async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await userAPI.setCountUserOnPage(pageSize);
    dispatch(setUsers(response.data.items));
    dispatch(setCountPages(response.data.totalCount));
    dispatch(toggleFetching(false));
}

export const setPageNumberWhenChange = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleFetching(true));
    let response = await userAPI.setPageNumberWhenChange(pageNumber, pageSize)
    dispatch(toggleFetching(false));
    dispatch(setUsers(response.data.items));
}

export const acceptFollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowProgress(true, userId))
    let response = await userAPI.requestUsers(`follow/` + userId)
    if (response === true) {
        userAPI.unfollow(userId);
        dispatch(unfollow(userId))
    }
    else {
        userAPI.follow(userId);
        dispatch(follow(userId))
    }
    dispatch(toggleFollowProgress(false, userId))
}

export default usersReducer;