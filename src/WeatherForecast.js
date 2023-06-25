import React,{useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let[load,setLoad]=useState(false);
    let [forecast,setForecast]=useState();
    function showForecast(response){
        return(
            setLoad(true),
        setForecast(response.data.daily));
            
    }
    useEffect (()=>{
    setLoad(false);
    },[props])

    function notLoad(){
        let key="ab8e7ef210556986d1c9a75d6007b825"
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.lon}&appid=${key}&units=metric`
        axios.get(apiUrl).then(showForecast);
    }

    if(load){
        return(
            <div className="WeatherForecast">
               <div className="row">
                {forecast.map(function (forecastDay,index){
                    
                    if(index<5)
                    return(
                        <div className="col p-0" key={index}>
                        <WeatherForecastDay data={forecastDay}/>
                        </div>
                    );
                    else{
                        return  null;
                    }
                })
            }    
               </div>
            </div>
           );
    }else {
        notLoad()
        return null; 
    }
    
}