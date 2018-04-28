import React,{Component} from "react"

export default function getModuleAsync(lazyLoader){
    
    class LazyComponnet extends Component {
        constructor(){
            super()
            this.state = {
                Comp: null
            }
        }

        componentWillMount(){
            lazyLoader
            .then(moduler=>moduler.default)
            .then(Comp=>{
                this.setState({
                    Comp
                })
            })
            .catch((err) => {
                console.error(err,'Cannot load component in <LazyComponnet />');
                throw err;
            });
        }

        render(){
            let Comp = this.state.Comp
            return Comp ? <Comp/>:null
        }
    }

    return LazyComponnet
}