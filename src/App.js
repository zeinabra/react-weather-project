import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <div className="container">
      
      <Weather />
      <footer>
        coded by Zeinab Rasouli <a href="https://github.com/zeinabra/react-weather-project" target="_blank">open-sourced</a>
      </footer>
     </div>
    </div>
  );
}

