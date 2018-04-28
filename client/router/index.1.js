import React from "react"
import universal from 'react-universal-component';
// import Home from "../pages/home"
// import Person from "../pages/Person"
// import Shopcart from "../pages/Shopcart"

const getModule = moduleName => import(`../pages/${moduleName}`)

// const Me = loadComponent(() => import(/* webpackChunkName: "app-me" */"componentpath/me/me.jsx"));
// const Home = loadComponent(() => import(/* webpackChunkName: "app-home" */"componentpath/home/home.jsx"));
// const List = loadComponent(() => import(/* webpackChunkName: "app-list" */"componentpath/list/list.jsx"));
// const Detail = loadComponent(() => import(/* webpackChunkName: "app-detail" */"componentpath/detail/detail.jsx"));
// const Email = loadComponent(() => import(/* webpackChunkName: "app-email" */"componentpath/email/email.jsx"));
// const Search = loadComponent(() => import(/* webpackChunkName: "app-search" */"componentpath/search/search.jsx"));

const routers = [
    {
        path:'/',
        exact: true,
        component:universal(()=>getModule("home"))
    },
    {
        path:'/shopcart',
        component:universal(()=>getModule("shopcart"))
    },
    {
        path:'/person',
        component:universal(()=>getModule("person"))
    }
]

export default routers