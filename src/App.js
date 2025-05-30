import logo from './logo.svg';
import './App.css';
import { weatherFetch } from '../api/weatherApi'; 
import {useEffect, useState } from "react"; 

function App() {



  function SubmitButton() {
    return <button>click me</button>;
    

  }
  console.log()
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <textarea name="" placeholder="input your location city"/>
          
        
        </p> 
        <SubmitButton /> 
        
        <a
          
        >
        
        </a>
      </header>
    </div>
  );
}

export default App;
