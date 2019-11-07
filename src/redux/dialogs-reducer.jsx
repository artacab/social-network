const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    ],
    newMessageBody: ''
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});
export default dialogsReducer;