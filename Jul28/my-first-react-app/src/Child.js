
import React from 'react';

class Child extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            count:0
        }

    }
    render(){
        setTimeout(()=>{
            this.setState({
                count: this.state.count +1
            })
        },1000)
        return (
            <div>
                <h1>Seconds since component rendered: {this.state.count}</h1>
            </div>
        )

    }
}



export default Child