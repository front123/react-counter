import React from 'react';
import './App.css';
import './components/Counter'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter myV="good"/>
      </header>
    </div>
  );
}

export default App;
