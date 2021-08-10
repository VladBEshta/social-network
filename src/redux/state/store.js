import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Vladek'},
                {id: 2, name: 'Vadik'},
                {id: 3, name: 'Madik'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'bi'}
            ],
            newMessageText: "Hello"
        },
        profilePage: {
            posts: [
                {id: 1, post: 'HII', likes: 25},
                {id: 2, post: 'Byyy', likes: 0}
            ],
            newPost: "Flux"
        }
    },
    _callSubscriber() {
        console.log("changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state);
    }
}
export default store;