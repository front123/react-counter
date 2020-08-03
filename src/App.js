import React from 'react';
import './App.css';
import './components/Counter'
import CounterGroup from './components/CounterGroup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup />
      </header>
    </div>
  );
}

export default App;
