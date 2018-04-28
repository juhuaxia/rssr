import koa from "koa"
import path from "path"
import render from "koa-ejs"
import staticServer from "koa-static"
import routes from "./routes"

var app = new koa()

render(app,{
    // root:path.join(__dirname,'../view'),
    root:path.join(__dirname,'../dist'),
    layout:"index",
    viewExt:'ejs'
})
app.use(routes)
app.use(staticServer(path.join(__dirname,'../dist')))

app.listen(8800);