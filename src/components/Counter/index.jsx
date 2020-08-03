import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }

    onIncrease = ()=>{
        this.setState((preState) => ({
            value: preState.value + 1
        }));
    }

    onReduce = ()=>{
        this.setState((preState) => ({
            value: preState.value - 1
        }));
    }

    render(){
        return <div>
            <button onClick={this.onReduce}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.increase}>+</button>
        </div>;
    }
}

export default Counter;