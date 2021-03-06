import { createSelector } from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

export const getUserss = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true);
    });

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getFirstDisplaPage = (state) => {
    return state.usersPage.firstDisplaPage;
}
export const getMaxDisplayPage = (state) => {
    return state.usersPage.maxDisplayPage;
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowinInProgress = (state) => {
    return state.usersPage.followinInProgress;
}