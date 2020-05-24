import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "8e06e4a6-d298-4b50-a2e5-1716134a494a" }
});

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            }
            );
    },
    signIn(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    signOut() {
        return instance.delete(`auth/login`);
    }
}

export const userAPI = {
    requestUsers(userId) {
        return instance.get(`profile/` + userId);
    },
    setCountUserOnPage(pageSize) {
        return instance.get(`users?count=${pageSize}`);
    },
    setPageNumberWhenChange(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`);
    },
    follow(userId) {
        return instance.post(`follow/` + userId);
    },
    unfollow(userId) {
        return instance.delete(`follow/` + userId);
    }
}

export const profileAPI = {
    getUserProfile(query) {
        return instance.get(query)
            .then(response => {
                return response.data;
            });
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status/`, { status })
    },
    updateSelfPhoto(urlPhoto) {
        var formData = new FormData();
        formData.append("image", urlPhoto);
        return instance.put(`/profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export default userAPI