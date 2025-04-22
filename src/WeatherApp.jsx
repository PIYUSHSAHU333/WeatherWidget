import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState, useEffect } from "react";
import "./Weathercontainer.css";
import { getWeather } from './helper.js';
export default function WeatherApp(){

    let[info, setInfo] = useState({})

    function updateinfo(result){
        setInfo(result)
    }

    useEffect(()=>{
        async function getInitialWeather(){
            let weather = await getWeather("Delhi");
            let result = {
                city: "Delhi",
                weather: weather.weather[0].description,
                feelslike: weather.main.feels_like,
                humidity: weather.main.humidity,
                temp: weather.main.temp,
                maxTem: weather.main.temp_max,
                minTem: weather.main.temp_min,
                id: weather.weather[0].id,
                windSpeed : weather.wind.speed,
                airPressure: weather.main.pressure
            }
        setInfo(result);
        }
        getInitialWeather()
    }, [])

    return (
        <div className="Weathercontainer">
        
        <SearchBox updateinfo={updateinfo}/>
        
        <InfoBox info={info}/>
        </div>
    )
}