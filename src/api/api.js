import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "e48e9649-c731-4063-bdca-82c75640897b"}
    // headers: {"API-KEY": "d347e033-1c2d-465d-899e-93fbe631170a"}
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    getFollow(id) {
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getUnfollow(id) {
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    },
    getAuth() {
        return instance.get(`auth/me`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me () {
        return instance.get('auth/me')
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}

// export const loginAPI = {
//     login () {
//         return instance.post('auth/login')
//     }
// }
