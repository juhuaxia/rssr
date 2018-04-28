import React , {Component} from "react"
import {connect} from "react-redux"
import * as actions from "../action/home"
import Swiper from "react-swipeable-views"
import immutable from "immutable"

//components
import NavMenu from "../componnet/home/navMenu"
import Topic from "../componnet/home/topic"

class Home extends Component {
    constructor(){
        super()
        this.__id = 0
    }

    componentDidMount() {
        
    }

    componentWillReceiveProps(nextProps){
    }
    clickhandle(){
        this.props.addTodo()
    }
    render(){
        let { swiperBanner, nav, topicList, productList } = this.props
        return (
            <div>
                <div className="banner">
                    <Swiper>
                        {
                            swiperBanner.map((item,i)=>{
                                let { picture ,id } = item
                                return <img 
                                    src = { picture } 
                                    key = { id || this.__id++ } />
                            })
                        }
                    </Swiper>
                </div>
                <div className="p-newIndex-line"></div>
                <div className="p-newIndex-menu">
                    {
                        nav.map((item,i)=>{
                            let { picture ,id, title } = item
                            return <NavMenu 
                                key = { id || this.__id++ } 
                                picture = { picture }
                                title = { title }
                                ></NavMenu>
                        })
                    }
                </div>
                <Topic topics={ topicList.data||[] }/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    let { swiperBanner, nav, topicList, productList } = state
    return {
        swiperBanner,
        nav,
        topicList,
        productList
    }
}

const mapDispatchToProps = actions

export default connect(mapStateToProps,mapDispatchToProps)(Home)