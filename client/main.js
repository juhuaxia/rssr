import React from "react"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import App from "./app"
import reducer from "./reduce"
import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk"
import immutable from "immutable"

let initState = window.__initReduxState__ || null

let store = createStore(
    reducer,
    initState,
    applyMiddleware(thunk)
)


console.log(store.getState())
const Main = ()=>(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
)

export default Main