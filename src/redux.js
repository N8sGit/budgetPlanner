import {
    createStore,
} from 'redux';

// actions.js
export const login = (name) => ({
    type: 'LOGIN',
    name
});

export const logout = () => ({
    type: 'LOGOUT',
});

// reducers.js
export const mainReducer = (state = { loggedIn: false, firstname: '' }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                loggedIn: true,
                firstname: action.name
            })
        case 'LOGOUT':
            return Object.assign({}, state, {
                loggedIn: false,
            })
        default:
            return state;
    }
};


// store.js
export function configureStore(initialState = { loggedIn: false }) {
    const store = createStore(mainReducer, initialState);
    return store;
};
export const store = configureStore();
