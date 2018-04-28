import React , {Component} from "react"
import {connect} from "react-redux"
import * as actions from "../action"

class ChildComponent extends Component {
    constructor(){
        super()
        this.chageHandle = this.chageHandle.bind(this)
        this.addClickHandle = this.addClickHandle.bind(this)
        this.filterClickHandle = this.filterClickHandle.bind(this)
        
        this.state = {
            text:''
        }
    }

    chageHandle(e){
        this.setState({
            text:e.target.value
        })
    }
    
    addClickHandle(){
        if(this.state.text !== ""){
            this.props.addTodo(this.state.text)
        }
    }
    filterClickHandle(){
        if(this.state.text !== ""){
            this.props.filterTodo(this.state.text)
        }
    }

    render(){
        return (
            <div>
                <input onChange={this.chageHandle} value={this.state.text}/>
                <button onClick={this.addClickHandle}>增加</button>
                <button onClick={this.filterClickHandle}>删选</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = actions

export default connect(mapStateToProps,mapDispatchToProps)(ChildComponent)

