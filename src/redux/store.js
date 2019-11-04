import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store =  {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hello my dear', likesCount: 11},
                {id: 2, message: 'its veru beautiful', likesCount: 15},
            ],
            newPostText: 'whwew'
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber() {
        console.log('state change');
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;