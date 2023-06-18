import React from "react";
import FreindlyDate from "./FreindlyDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props){
    return(
        <div>
          <h1 className="mt-3 mb-1">{props.data.cityName}</h1>
            <ul>
                <li><FreindlyDate date={props.data.date} /></li>
                <li className="text-capitalize mt-1">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex">
                    <img src={props.data.icon} alt={props.data.description} className="image" />
                    <WeatherTemperature celcius={props.data.temperature} />
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        
                        <li>Humidity: {props.data.humidity}%</li>
                        <li className="mt-1">Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}