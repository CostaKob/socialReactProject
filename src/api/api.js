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
    getProfile(userId=8157) {
        return instance.get(`profile/${userId}`);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me/`);
    }
};