import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "b06971d9-611c-48a0-b181-a32de5e059d3"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then (response => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
        .then (response => response.data);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
        .then (response => response.data);
    },
    getProfile(userId=2) {
        console.warn('obsolete method. Please use profileAPI object')
        return profileApi.getProfile(userId);
    }
};

export const profileApi = {

    getProfile(userId=2) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }); // can be just {status} instead {status: status}
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me/`);
    },
    login() {
        return instance.post(`auth/login/`);
    }

};