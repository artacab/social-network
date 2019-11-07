const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'hello my dear', likesCount: 11},
        {id: 2, message: 'its veru beautiful', likesCount: 15}

    ],
    newPostText: 'whwew'
};

const profileReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_POST: {
                let newPost = {
                    id: 3,
                    message: state.newPostText,
                    likesCount: 0
                };
                let stateCopy = {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''};

                return stateCopy;
            }
            case UPDATE_NEW_POST_TEXT: {
                let stateCopy = {
                    ...state,
                    newPostText: action.newText
                };
                return stateCopy;
            }
            default:
                return state;
        }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewTextPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;