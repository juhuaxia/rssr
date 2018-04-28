import React, {Componnet} from "react"

const NavMenu = (props)=>(
    <li>
        <img src={ props.picture }/>
        <p>{ props.title }</p>
    </li>
)
export default NavMenu