import React, { Componnet } from "react"
import ScrollBox from "./scrollBox"

const Topic = (props)=>(
    <div>
        <h3 className="p-newIndex-t">主题推荐</h3>
        <div className="p-newIndex-theme">
            {
                props.topics.map((item)=>{
                    let { id, picture_cover, product_list } = item
                    return (
                        <div key={ id }>
                            <img className="banner" src={ picture_cover }/>
                            <ScrollBox product_list={ product_list }/>
                        </div>
                    )
                })
            }
        </div>
    </div>
)

export default Topic