import React from 'react'
import Counter from '../Counter';

class CounterGroup extends React.Component {
    constructor(props) {
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

    handleResize = (event) => {
        let newSize = event.target.value ? parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0 : 0;
        let sum = 0;
        if (newSize < this.state.size) {
            for (let i = this.state.size - 1; i >= newSize; i--) {
                sum += this.child[i].state.value;
                this.child.pop();
            }
            // this.child.forEach(element => {
            //     element.reset();
            // });  
        }
        let temp = sum;
        while(temp !== 0){
            if (temp>0) {
                this.props.store.dispatch({ type: 'DECREMENT' })
                temp --;
            }else{
                this.props.store.dispatch({ type: 'INCREMENT' });
                temp ++;
            }
        }
        if (newSize === 0){
            this.props.store.dispatch({ type: 'RESET' })
        }
        if (newSize !== this.state.size) {
            this.setState((preState) => ({
                totalNumber: preState.totalNumber - sum,
                size: newSize
            }))
        }

    }

    handleIncrease = () => {
        this.setState((preState) => ({
            totalNumber: preState.totalNumber + 1
        }))
    }

    handleReduce = () => {
        this.setState((preState) => ({
            totalNumber: preState.totalNumber - 1
        }))
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];
        return (
            <div>
                <div>
                    Counter Store:
                    <span>{this.props.store.getState()}</span>
                </div>
                Counter Size:
                <input type="Number" onBlur={this.handleResize} />
                <div>
                    Total Number: <span>{this.state.totalNumber}</span>
                </div>
                {
                    initArray.map(key => <Counter store={this.props.store} groupSize={this.state.size} onRef={this.onRef} onIncrease={this.handleIncrease} onReduce={this.handleReduce} key={key} />)
                }
            </div>
        );
    }

}

export default CounterGroup;