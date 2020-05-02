let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: '15' },
            { id: 2, message: "It is my first post", likesCount: '20' },
            { id: 3, message: "Hi?", likesCount: '0' },
            { id: 4, message: "yo yo yo", likesCount: '12' }
        ]
        
    },
    dialogsPage: {
        messages: [
            { id: 1, message: "Hi, how are you ?" },
            { id: 2, message: "What's up ?" },
            { id: 3, message: "Hello world !" },
            { id: 4, message: "My name is Costa" },
            { id: 5, message: "Whaaaat!??" },
            { id: 6, message: "Yo yo yo!!" }
        ],
        dialogs: [
            { id: 1, name: 'Costa' },
            { id: 2, name: 'Darya' },
            { id: 3, name: 'Yuli' },
            { id: 4, name: 'Diana' },
            { id: 5, name: 'Vasya' },
            { id: 6, name: 'Petya' }
        ]
    },
    sideBar: {
        friends: [
            { id: 100, name: 'Darya', img: '#' },
            { id: 200, name: 'Diana', img: '#' },
            { id: 300, name: 'Yuli', img: '#' }
        ]
    }
      
};

export default state;