import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Hello from './component/Hello'

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Welcome></Welcome>
      <Hello name = "Kaushl"></Hello>
      <Hello name = "villota"></Hello>
      <Hello name = "LALA"></Hello>
    </div>
  );
}

export default App;
