import React from "react";

export default function WeatherForecastDay(props){
    let icon=`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
    let description=props.data.weather[0].description;
    function maxTemperature(){
        let temperature=Math.round(props.data.temp.max)
        return `${temperature}°`      
    }
    function minTemperature(){
        let temperature=Math.round(props.data.temp.min)
        return `${temperature}°`
    }
    function forecastDate(){
        let date=new Date(props.data.dt*1000);
        let day=date.getDay();
        let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        return(days[day]);
    }
    
    return(
        <div>
                       <div className="WeatherForecast-day">{forecastDate()}</div>
                       <img src={icon} alt={description}/>
                       <div className="WeatherForecast-temperatures">
                               <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                               <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
                       </div> 
        </div>         
    );
}