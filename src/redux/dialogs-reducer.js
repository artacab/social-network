
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Qu'},
        {id: 3, message: 'Hi'},
        {id: 4, message: 'Ey'},
        {id: 5, message: 'Boo'}
    ],
    dialogs: [
        {id: 1, name: 'Artyom'},
        {id: 2, name: 'Helen'},
        {id: 3, name: 'Veronica'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Andrey'}
    ]
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export default dialogsReducer;