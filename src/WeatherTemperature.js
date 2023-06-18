import React,{useState} from "react";
import "./Weather.css";

export default function WeatherTemperature(props){
    
let[unit,setUnit]=useState("celsius");

function convertToFahrenhiet(event){
    event.preventDefault();
    setUnit("fahrenhiet");
}
function convertToCelcius(){
    setUnit("celsius");
}
if(unit==="celsius"){
    return(
        <div className="WeatherTemperature">
        <span className="temperature">{props.celcius}</span>
         <span className="unit">
         °C |<a href="/" onClick={convertToFahrenhiet}>°F</a>
         </span>
        </div>
    );
}else {
     let fahrenhiet =Math.round((props.celcius*9)/5+32);
        return(
        <div className="WeatherTemperature">
        <span className="temperature">{fahrenhiet}</span>
         <span className="unit">
         <a href="/" onClick={convertToCelcius}>°C </a>|°F
         </span>
        </div>

        );
    }
}

