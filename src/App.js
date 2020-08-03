import React from 'react';
import './App.css';
import './components/Counter'
import CounterGroup from './components/CounterGroup'

class App extends React.Component {
  render(){
     return (
      <div className="App">
        <header className="App-header">
          <CounterGroup store={this.props.store}/>
        </header>
      </div>
    )
  }
 
}

export default App;
