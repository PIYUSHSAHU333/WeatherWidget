import React, { use, useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import "./searchBox.css"
import { getWeather } from './helper.js';
export default function SearchBox({updateinfo}){


    let [query, setQuery] = useState("");
    let [err, setErr] = useState(false)


    function handleChange(event){
        setQuery(event.target.value)
    }

    
    async function handleSearch(event){
        event.preventDefault();
        if(query.length < 1){
            return
        }
        try{
        const weather = await getWeather(query);
        console.log("Full weather object",weather)
        setQuery("");
        let result = {
            city: query,
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

        if(err){
            setErr(false)
        }
       
        updateinfo(result)
        

        }
        catch(err){
            setErr(true)
        }
}

    return(


        <div className='searchBox'>

            <form onSubmit={handleSearch}> 
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    color='white'
                    size="small"
                    className='searchbar'
                    style={{ marginRight: 8}}
                    value={query}
                    onChange={handleChange}
                />

                <IconButton color="rgba(33, 33, 33, 1);" aria-label="search" type='submit'>
                    <SearchIcon />
                </IconButton>
                {err && <p style={{color: "red"}}>No such place exists </p>}
            </form>
        </div>

        
    )
}