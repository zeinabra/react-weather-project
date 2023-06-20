import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    return(
     <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thu</div>
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
                <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">50°</span>
                        <span className="WeatherForecast-temperature-min">23°</span>
                        say helloo
                </div> 
            </div>
        </div>
     </div>
    );
}