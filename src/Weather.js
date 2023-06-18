import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
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
                date:new Date(response.data.dt*1000),
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
        let key=`5e7f9aa6e581874c6866724afae9d84f`
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
            <WeatherInfo data={weather} />
        </div>
    );}else{
        search();
        return("Loading...");
    }
}