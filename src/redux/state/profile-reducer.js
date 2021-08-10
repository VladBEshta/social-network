import {getProfile, getUserStatus, updateUserStatus,} from "../../API/API";

let initialState = {
    posts: [
        {id: 1, post: 'HII', likes: 25},
        {id: 2, post: 'Byyy', likes: 0}
    ],
    profile: null,
    status: "My status from global state"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {id: 3, post: action.newPostText, likes: 0}],
            }
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET-USER-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}
export const addPostAction = (newPostText) => ({type: "ADD-POST", newPostText})
export const setUserProfile = (profile) => ({type: 'SET-USER-PROFILE', profile})
export const setUserStatus = (status) => ({type: 'SET-USER-STATUS', status})
export default profileReducer
export const getProfileDataThunk = (userId) => {
    return (dispatch) => {
        getProfile(userId).then(data => dispatch(setUserProfile(data)))
    }
}
export const getProfileStatusThunk = (userId) => {
    return (dispatch) => {
        getUserStatus(userId).then(data => dispatch(setUserStatus(data)))
    }
}
export const updateProfileStatusThunk = (status) => {
    return (dispatch) => {
        updateUserStatus(status).then(data => {
                if (data.resultСode === 0) dispatch(setUserStatus(status))
            }
        )
    }
}
