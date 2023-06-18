import React from "react";
import FreindlyDate from "./FreindlyDate";

export default function WeatherInfo(props){
    return(
        <div>
          <h1 className="mt-3 mb-1">{props.data.cityName}</h1>
            <ul>
                <li><FreindlyDate date={props.data.date} /></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex">
                    <img src={props.data.icon} alt={props.data.description} className="image" />
                    <span className="tempreture">{props.data.temperature}</span> <span className="unit">°C</span>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}