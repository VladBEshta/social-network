import axios from "axios";

const instanceAxios = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': '460e160f-8602-44bf-be3b-c0e6c732b3ac'
        }
    },
)
export const getUsers = (currentPage, pageSize) => {
    return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}
export const getProfile = (userId) => {
    return instanceAxios.get(`profile/` + userId,)
        .then(response => response.data);
}
export const deleteFollow = (useId) => {
    return instanceAxios.delete(`follow/${useId}`).then(response => response.data)
};
export const postFollow = (userId) => {
    return instanceAxios.post(`follow/${userId}`).then(response => response.data)
}
export const getAuthMe = () => {
    return instanceAxios.get('auth/me').then(response => response.data)
}
export const getUserStatus = (userId) => {
    return instanceAxios.get(`profile/status/${userId}`).then(response => response.data)
}
export const updateUserStatus = (status) => {
    return instanceAxios.put('profile/status', {status}).then(response => response.data)
}
export const login = (email, password, rememberMe, captcha) => {
    return instanceAxios.post(`auth/login`, {email, password, rememberMe, captcha}).then(response => (response.data))
}
export const logout = () => {
    return instanceAxios.delete(`auth/login`).then(response => response.data)
}
export const savePhoto = (photo) => {
    const formData = new FormData()
    formData.append('image', photo)
    return instanceAxios.put(`profile/photo`, formData).then(response => response.data)
}
export const apiGetCaptcha = () => instanceAxios.get(`security/get-captcha-url`)


