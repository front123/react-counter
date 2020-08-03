import React from 'react'
import Counter from '../Counter';

class CounterGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size: 0,
            totalNumber: 0
        }
        this.child = [];
    }

    onRef = (ref) => {
        this.child.push(ref)
    }

    handleResize = (event)=>{
        let newSize = event.target.value?parseInt(event.target.value)>0?parseInt(event.target.value):0:0;
        if (newSize < this.state.size){
            for(let i=this.state.size; i>newSize; i--){
                this.child.pop();
            }
            this.child.forEach(element => {
                element.reset();
            });  
        }
        if (newSize !== this.state.size){
            this.setState({
                totalNumber: 0,
                size: newSize
            })
        }
        
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
                    initArray.map(key => <Counter groupSize={this.state.size} onRef={this.onRef} onIncrease={this.handleIncrease} onReduce={this.handleReduce} key={key}/>)
                }
            </div>
        );
    }

}

export default CounterGroup;