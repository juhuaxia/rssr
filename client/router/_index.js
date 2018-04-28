import React from "react"
import Home from "../pages/home"
import Person from "../pages/Person"
import Shopcart from "../pages/Shopcart"

const routers = [
    {
        path:'/',
        exact: true,
        component:Home
    },
    {
        path:'/shopcart',
        component:Shopcart
    },
    {
        path:'/person',
        component:Person
    }
]

export default routers