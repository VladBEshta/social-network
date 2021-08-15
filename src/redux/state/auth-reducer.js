import {apiGetCaptcha, getAuthMe, login, logout} from "../../API/API";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET-AUTH-DATA":
            return {
                ...state,
                ...action.data
            }
        case "SET-CAPTCHA-URL":
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}
export const getAuthMeThunk = () => async (dispatch) => {
    const data = await getAuthMe()

    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthData(id, login, email, true))
    }

}
export const loginTC = (email, password, rememberMe, captchaUrl) => async (dispatch) => {
    const data = await login(email, password, rememberMe, captchaUrl)

    if (data.resultCode === 0) {
        dispatch(getAuthMeThunk())
    } else if(data.resultCode === 10) {
        dispatch(getCaptcha())
    }
}
export const logoutTC = () => async (dispatch) => {
    const data = await logout()
    if (data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }
}

export const getCaptcha = () => async (dispatch) => {
    const response =  await apiGetCaptcha()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}
export const setAuthData = (id, login, email, isAuth) => ({type: 'SET-AUTH-DATA', data: {id, login, email, isAuth}})
export const setCaptchaUrl = (captchaUrl) => ({type: 'SET-CAPTCHA-URL', data: {captchaUrl}})
export default authReducer;