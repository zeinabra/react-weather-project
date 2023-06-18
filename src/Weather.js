import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props){
    let[city,setCity]=useState(props.defaultCity);
    let[weather,setWeather]=useState({ready:false});
    

    function showWeather(response){
        return(
            setWeather({
                ready:true,
                temperature:Math.round(response.data.main.temp),
                humidity:response.data.main.humidity,
                wind:Math.round(response.data.wind.speed),
                icon:`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                description: response.data.weather[0].description,
                cityName:response.data.name,
            })
            
        );
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
        
    }
    function cityUpdate(event){
        return(
            setCity(event.target.value)
        );
    }
    function search(){
        let key=`a33b693cfbefd271b0ed075f9a8f65f0`
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
        axios.get(apiUrl).then(showWeather);
    }
    if (weather.ready){
    
    return(
        <div className="Weather">
            <form className="mt-3" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city ..." className="form-control" autoFocus="on" onChange={cityUpdate} />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="search" className="btn btn-primary w-100"/>
                    </div>
                </div>

            </form>
            <h1 className="mt-3 mb-1">{weather.cityName}</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>{weather.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex">
                    <img src={weather.icon} alt={weather.description} className="image" />
                    <span className="tempreture">{weather.temperature}</span> <span className="unit">°C</span>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        
                        <li>Humidity: {weather.humidity}%</li>
                        <li>Wind: {weather.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );}else{
        search();
        return("Loading...");
    }
}