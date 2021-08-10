let initialState = {
    dialogs: [
        {id: 1, name: 'Vladek'},
        {id: 2, name: 'Vadik'},
        {id: 3, name: 'Madik'},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'bi'}
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            return {
                ...state,
                messages: [...state.messages,{id: 5, message: action.newMessage}],
            }
        default:
            return state
    }
}
export const sendMessageAction = (newMessage) => ({type: "SEND-MESSAGE", newMessage})
export default dialogsReducer