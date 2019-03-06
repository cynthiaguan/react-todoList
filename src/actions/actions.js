import {ADD_TODO, DELETE_TODO, UPDATE_TODO, FETCH_TODO, FETCH_TODO_LIST} from './actionTypes';

let nextTodoId = 100

export const addTodo = (item) => {
    return {
        type: ADD_TODO,
        payload:{
            ...item,
            id: nextTodoId++
        }
    }
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload:id
    }
};

export const updateTodo = (item) => {
    return {
        type: UPDATE_TODO,
        payload:item
    }
}

export const fetchTodo = (id) => {
    return {
        type: FETCH_TODO,
        payload:id
    }
}

export const fetchTodoList = () => {
    return {
        type: FETCH_TODO_LIST
    }
}

