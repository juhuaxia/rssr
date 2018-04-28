import React from "react"
import {renderToString} from "react-dom/server"
import {StaticRouter} from "react-router-dom"
import {Provider} from "react-redux"
import App from "../../client/app"
import {createStore} from 'redux'
import reducer from "../../client/reduce"

let store = createStore(
    reducer
)

const routeRender = (path)=>{
    let context = {}
    return renderToString(
        <StaticRouter location={path} context={context}>
            <Provider store={store}>
                <App/>
            </Provider>
        </StaticRouter>
    )
}

export default routeRender