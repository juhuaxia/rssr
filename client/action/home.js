import * as types from "../const"

export function addTodo(text){
    return {
        type:types.TODO_ADD,
        text
    }
}
export function filterTodo(text){
    return {
        type: types.TODO_FILTER,
        text
    }
}

export function getList(){
    return {
        type: types.TODO_GETLIST
    }
}