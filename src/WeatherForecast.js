import React,{useState} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let[load,setLoad]=useState(false);
    let [forecast,setForecast]=useState();
    function showForecast(response){
        console.log(response);
            setLoad(true);
            setForecast(response.data.daily);
    }
    if(load){
        return(
            <div className="WeatherForecast">
               <div className="row">
               <div className="col">
                   <WeatherForecastDay data={forecast[0]} />
                   </div>
               </div>
            </div>
           );
    }else {
        
        let key="ab8e7ef210556986d1c9a75d6007b825"
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&appid=${key}&units=metric`
        axios.get(apiUrl).then(showForecast);
        
    }
    
}