import profileReducer, { addPostActionCreator, deletePostActionCreator } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: "Hi, how are you?", likesCount: '15' },
        { id: 2, message: "It is my first post", likesCount: '20' },
        { id: 3, message: "Hi?", likesCount: '0' },
        { id: 4, message: "yo yo yo", likesCount: '12' }
    ]

};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("Costa-Test");
    
    // 2. action
    let newState = profileReducer( state, action );
    // 3. expectation
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("Costa-Test");

    // 2. action
    let newState = profileReducer( state, action );
    // 3. expectation
    expect(newState.posts[4].message).toBe("Costa-Test");
});

// TDD

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePostActionCreator(1);

    // 2. action
    let newState = profileReducer( state, action );
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('after deleting length shouldnt be decrement if id id not correct', () => {
    // 1. test data
    let action = deletePostActionCreator(1000);

    // 2. action
    let newState = profileReducer( state, action );
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});