import React , { Componnet } from "react"

const Header = (props)=>{
    let { title , isHome } = props
    return isHome
            ? <header> <p>{title}</p> <i className="iconfont more"></i> </header>
            : <header><i className="iconfont backBtn"></i><p>{title}</p> <i className="iconfont more"></i> </header>
}

export default Header