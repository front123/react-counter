import React from 'react'
import Counter from '../Counter';

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size: 0,
            totalNumber: 0
        }
    }

    handleResize = (event)=>{
        this.setState({
            size: event.target.value ? parseInt(event.target.value)>0?parseInt(event.target.value):0:0
        })
    }

    handleIncrease = ()=>{
        this.setState((preState)=>({
            totalNumber: preState.totalNumber + 1
        }))
    }

    handleReduce = ()=>{
        this.setState((preState)=>({
            totalNumber: preState.totalNumber - 1
        }))
    }

    render(){
        const initArray = [...Array(this.state.size).keys()];
        return (
            <div>
                Counter Size:
                <input type="Number" onBlur={this.handleResize}/>
                <div>
                    Total Number: <span>{this.state.totalNumber}</span>
                </div>
                {
                    initArray.map(key => <Counter onIncrease={this.handleIncrease} onReduce={this.handleReduce} key={key}/>)
                }
            </div>
        );
    }

}

export default CounterGroup;