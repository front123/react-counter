import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        }
    }

    handleIncrease = ()=>{
        this.setState((preState) => ({
            value: preState.value + 1
        }));
        this.props.onIncrease();
    }

    handleReduce = ()=>{
        this.setState((preState) => ({
            value: preState.value - 1
        }));
        this.props.onReduce();
    }

    render(){
        return <div>
            <button onClick={this.handleReduce}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.handleIncrease}>+</button>
        </div>;
    }
}

export default Counter;