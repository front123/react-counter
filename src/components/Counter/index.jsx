import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            groupSize: 0
        }
    }
    reset = ()=>{
        this.setState({
            value: 0
        });
    }

    handleIncrease = ()=>{
        this.setState((preState) => ({
            value: preState.value + 1
        }));
        this.props.onIncrease();
        this.props.store.dispatch({ type: 'INCREMENT' });
    }

    handleReduce = ()=>{
        this.setState((preState) =>{
            return {value: preState.value - 1}
        });
        this.props.onReduce();
        this.props.store.dispatch({ type: 'DECREMENT' })
    }

    componentDidMount(){
        this.props.onRef(this)
    }

    componentWillUnmount(){
        // use this.value to reduce or increase store value
        // this.props.store.dispatch({ type: 'DECREMENT' })
    }

    // static getDerivedStateFromProps(props, state){
    //     if (props.groupSize !== state.groupSize){
    //         return{
    //             value: 0,
    //             groupSize: props.groupSize
    //         }
    //     }
    //     return null;
    // }

    render(){
        return <div>
            <button onClick={this.handleReduce}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.handleIncrease}>+</button>
        </div>;
    }
}

export default Counter;