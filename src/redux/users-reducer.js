const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: 
    [
        { id: 1, firstName: 'Costa', lastName: 'Kobrinsky', status:'Hello hello', location: { city: 'Nahariya', country: 'Israel' }, followed: false, img:'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg'},
        { id: 2, firstName: 'Darya', lastName: 'Petrov', status:'I am OK', location: { city: 'Hadera', country: 'Israel' }, followed: true, img:'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg'},
        { id: 3, firstName: 'Diana', lastName: 'Cohen', status:'I am painting', location: { city: 'Haifa', country: 'Israel' }, followed: false, img:'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg'},
        { id: 4, firstName: 'Yuli', lastName: 'Sidorov', status:'I am playing', location: { city: 'Akko', country: 'Israel' }, followed: true, img:'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg'},
        { id: 5, firstName: 'Lena', lastName: 'Israeli', status:'Hello world', location: { city: 'Jerusalem', country: 'Israel' }, followed: false, img:'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg'},
        { id: 6, firstName: 'Borya', lastName: 'Smith', status:'How are you today?', location: { city: 'Atlit', country: 'Israel' }, followed: true, img:'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg'},
        { id: 7, firstName: 'Natasha', lastName: 'Doe', status:'Looking for a job', location: { city: 'Tel Aviv', country: 'Israel' }, followed: false, img:'https://www.flaticon.com/premium-icon/icons/svg/2925/2925596.svg'}
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (user) => {
                    if( user.id === action.userId ) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( (user) => {
                    if( user.id === action.userId ) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS: {
            return { ...state, users: [ ...state.users, ...action.users ] };
        }

        default:
            return state;
    }
};

export const followAC = (userId) => ( {type: FOLLOW, userId} );
export const unfollowAC = (userId) => ( {type: UNFOLLOW, userId} );
export const setUsersAC = (users) => ( {type: SET_USERS, users} );

export default usersReducer;