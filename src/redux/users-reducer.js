const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, photoUrl:'https://go4.imgsmail.ru/imgpreview?key=3ac31dbde58bd2dd&mb=imgdb_preview_1985', followed: false, fullName: 'Andro', status: 'suka suka', location: {city: 'Gomel', country: 'Belaurs'}},
        {
            id: 2,
            photoUrl:'https://go4.imgsmail.ru/imgpreview?key=3ac31dbde58bd2dd&mb=imgdb_preview_1985',
            followed: true,
            fullName: 'Natalia',
            status: 'go fucks',
            location: {city: 'Los - Angeles', country: 'USA'}
        },
        {id: 3, photoUrl:'https://go4.imgsmail.ru/imgpreview?key=3ac31dbde58bd2dd&mb=imgdb_preview_1985', followed: false, fulName: 'Julia', status: 'aaaa seks', location: {city: 'Genoa', country: 'Italy'}},
        {id: 4, photoUrl:'https://go4.imgsmail.ru/imgpreview?key=3ac31dbde58bd2dd&mb=imgdb_preview_1985', followed: true, fullName: 'Sergio', status: 'lova lova', location: {city: 'Sevilla', country: 'Spain'}}
    ]
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
           return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        }

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};

        default :
            return state;
        }
    }
    export const followAC = (userId) => ({type: FOLLOW, userId});
    export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
    export const setUsersAC = (users) => ({type: SET_USERS, users});
    export default usersReducer;