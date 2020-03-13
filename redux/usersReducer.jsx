const FOLLOW = "follow_user";
const UNFOLLOW = "unfollow_user";
const SET_USERS = "set_users";

export const followUserAC = (userId) => {
    return { type: FOLLOW, userId }
}

export const unfollowUserAC = (userId) => {
    return { type: UNFOLLOW, userId }
}

export const setUsersAC = (users) => {
    return { type: SET_USERS, users }
}

let initState = {
    users: []
}
const usersReducer = (state = initState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, userFollowed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, userFollowed: false }
                    }
                    return u;
                })
            }

        case SET_USERS:
            return {
                ...state, users: [ ...state.users, ...action.users ]
            }

        default:
            return state;
    }
}

export default usersReducer;