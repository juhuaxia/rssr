import React from "react"
import asyncLoadModule from "../utils/getModuleAsync"
// import Home from "../pages/home"
// import Person from "../pages/Person"
// import Shopcart from "../pages/Shopcart"

const getModule = moduleName => import(`../pages/${moduleName}`)

const routers = [
    {
        path:'/',
        exact: true,
        component:()=>{
            let Home = asyncLoadModule(getModule("home"))
            return <Home/>
        }
    },
    {
        path:'/shopcart',
        component:()=>{
            let Shopcart = asyncLoadModule(getModule("shopcart"))
            return <Shopcart/>
        }
    },
    {
        path:'/person',
        component:()=>{
            let Person = asyncLoadModule(getModule("person"))
            return <Person/>
        }
    }
]

export default routers