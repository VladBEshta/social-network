import {} from "../../API/API";
import {getAuthMeThunk} from "./auth-reducer";

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET-INITIALIZE":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthMeThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialSuccess())
        })
}

export const setInitialSuccess = () => ({type: 'SET-INITIALIZE'})
export default appReducer;