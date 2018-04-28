import React, { Componnet } from "react"
import { formatePrice } from "../../utils/commMethods"

const ScrollBox = (props = {product_list:[]})=>(
    <div className="scrollBox">
        <div className="scroll">
            <div className="scroll_1">
                <ul>
                    {
                        (props.product_list||[]).map((item)=>{
                            let { id, title, icon, product_id, price } = item
                            return (
                                <li key={ id }>
                                    <img src={ icon }/>
                                    <dl>
                                        <dt>{ title }</dt>
                                        <dd>{ formatePrice(price) }</dd>
                                    </dl>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default ScrollBox