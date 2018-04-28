import * as types from "../const"
import { combineReducers } from 'redux'
import immutable, {List, Map} from "immutable"

let initState = {
    swiperBanner:[],
    nav:[],
    topicList:[],
    productList:[]
}
//name must be same to server initstate key
function swiperBanner(state = initState.swiperBanner,action){
    state = List(state)
    console.log("redux state", state)
    switch(action.type){
        case types.TODO_ADD:
            let newSwiper = {picture:'http://mall-file.putaocdn.com/file/4e123e4f1e884c832e2e27bd8af32e0b48c1686c.jpg'}
            // console.log("new State ",state.push(newSwiper).toJS())
            return state.push(newSwiper);

        default:
            return state
    }
}
function nav(state = [],action){
    switch(action.type){
        case types.TODO_GETLIST:
            return [...state];
        case types.TODO_ADD:
            state = [...state,{text:action.text}];
            return state

        case types.TODO_FILTER:
            state =  state.filter((item,index)=>{
                return item.text === action.text
            })
        return state

        default:
            return state
    }
}
function topicList(state = [],action){
    switch(action.type){
        case types.TODO_GETLIST:
            return [...state];
        case types.TODO_ADD:
            state = [...state,{text:action.text}];
            return state

        case types.TODO_FILTER:
            state =  state.filter((item,index)=>{
                return item.text === action.text
            })
        return state

        default:
            return state
    }
}

function productList(state = [],action){
    switch(action.type){
        case types.TODO_GETLIST:
            return [...state];
        case types.TODO_ADD:
            state = [...state,{text:action.text}];
            return state

        case types.TODO_FILTER:
            state =  state.filter((item,index)=>{
                return item.text === action.text
            })
        return state

        default:
            return state
    }
}

const reducers = combineReducers({
    swiperBanner,
    nav,
    topicList,
    productList
})

export default reducers