import Router from "koa-router"
import routerRender from "./routeRender"
import routes from "./routeMap"
import getHomeData from "../controller/home"
// import {initState} from "../../client/reduce"

var router = new Router()

routes.map((route,i)=>{
    let { path, title } = route
    router.get(path , async (ctx,next)=>{
        //如果是.xxx结尾的，不是页面路由，直接交由下一个中间件
        // if (ctx.path.match(/\.\w*$/)) {
        //     await next();
        // }else{
            // console.log("==----------------------------==",await getHomeData())
            let initState = await getHomeData()
            let html = routerRender(path)
            await ctx.render("index",{
                root:html,
                reduxState:JSON.stringify(initState)
            })
        // }
        
    })
})



export default router.routes()