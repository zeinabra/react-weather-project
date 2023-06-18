import React,{useState} from "react";

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
        <span className="tempereture">{props.celcius}</span>
         <span className="unit">
         °C |<a href="/" onClick={convertToFahrenhiet}>°F</a>
         </span>
        </div>
    );
}else {
     let fahrenhiet =(props.celcius*9)/5+32;
        return(<div className="WeatherTemperature">
        <span className="tempereture">{fahrenhiet}</span>
         <span className="unit">
         <a href="/" onClick={convertToCelcius}>°C </a>|°F
         </span>
        </div>

        );
    }
}

