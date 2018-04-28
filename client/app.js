import React,{ Component }from "react"
import {Route, Link} from "react-router-dom"
import Header from "./componnet/header"
// import routes from "./router/index.1"
import routes from "./router/_index"

const App = ()=> (
    <div className="app">
        <Header/>
        {
            routes.map((route,i)=><Route key={i} {...route}/>)
        }
    </div>
)

export default App