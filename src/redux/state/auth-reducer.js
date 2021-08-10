import {getAuthMe, login, logout} from "../../API/API";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET-AUTH-DATA":
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}
export const getAuthMeThunk = () => (dispatch) => {
    return getAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthData(id, login, email, true))
            }
        })
}
export const loginTC = (email, password, rememberMe) => (dispatch) => {
    login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                console.log(data)
                dispatch(getAuthMeThunk())
            }else {
                alert(data.messages[0])
            }
        })
}
export const logoutTC = () => {
    return (dispatch) => {
        logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false))
            }
        })
    }
}

export const setAuthData = (id, login, email, isAuth) => ({type: 'SET-AUTH-DATA', data: {id, login, email, isAuth}})
export default authReducer;