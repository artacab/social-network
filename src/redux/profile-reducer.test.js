import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from 'react';


it('new post should be added', () => {
    let action = addPostActionCreator('okkkkk');
    let state = {
        posts: [
            {id: 1, message: 'hello my dear', likesCount: 11},
            {id: 2, message: 'its veru beautiful', likesCount: 15}

        ]
    }
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
})

