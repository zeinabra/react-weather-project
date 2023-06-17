import React from "react";
import Weather from "./Weather";
import './App.css';
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      
      <Weather />
      <footer>
        coded by Zeinab Rasouli <a href="https://github.com/zeinabra/react-weather-project" target="_blank">open-sourced</a>
      </footer>
    </div>
  );
}

