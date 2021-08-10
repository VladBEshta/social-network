import {getUsers} from "../../API/API";

let initialState = {
    users: [],
    totalCount: 10,
    currentPage: 1,
    pageSize: 5,
    isFetching: false,
    inProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE-FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: !user.followed}
                    }
                    return user
                })
            }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "CHANGE-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-PAGES":
            return {...state, totalCount: action.totalCount}
        case "TOGGLE-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IN-PROGRESS":
            return {
                ...state,
                inProgress: action.isFetching
                    ? [...state.inProgress, action.userId]
                    : state.inProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
export const toggleFollow = (userId) => ({type: 'TOGGLE-FOLLOW', userId})
export const setUsers = (users) => ({type: 'SET-USERS', users})
export const changePage = (currentPage) => ({type: "CHANGE-CURRENT-PAGE", currentPage})
export const setTotalCount = (totalCount) => ({type: "SET-TOTAL-PAGES", totalCount})
export const toggleFetching = (isFetching) => ({type: 'TOGGLE-FETCHING', isFetching})
export const toggleProgress = (isFetching, userId) => ({type: 'TOGGLE-IN-PROGRESS', isFetching, userId})

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        dispatch(changePage(currentPage))
        getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
                dispatch(toggleFetching(false))
            })
    }
}
export default usersReducer