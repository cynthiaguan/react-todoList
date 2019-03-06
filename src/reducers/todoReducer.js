import {ADD_TODO, DELETE_TODO, UPDATE_TODO, FETCH_TODO, FETCH_TODO_LIST} from '../actions/actionTypes';


// let todos;
// (() => {
//     console.log('111')
//     if (localStorage.todos) {
//         todos = JSON.parse(localStorage.todos);
//     } else {
//         todos = [];
//     }
// })();

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return state.filter(item => item.id !== action.payload);
        case UPDATE_TODO:
            return state.map(item => (item.id === action.payload.id ? {...item, nickName: action.payload.nickName} : item))
        case FETCH_TODO_LIST:
        case FETCH_TODO:
        default:
            return state;
    }
}

export default todoReducer;