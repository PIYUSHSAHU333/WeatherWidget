import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import cloudy from "./assets/cloudy.png";
import clouds from "./assets/clouds.png"
import haze from "./assets/haze.png"
import drizzle from "./assets/drizzle.png"
import rain from "./assets/rain.png"
import snowflake from "./assets/snowflake.png"
import thunderstorm from "./assets/thunderstorm.png"
import sun from "./assets/weather.png"
import { Box } from '@mui/material';
export default function MainWeather({info}){
    

  function capitalizeFirstLetter(str){
    console.log("str value: ", str)
    if(!str){ return "unknown"}
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }
    console.log("from mainweather ",info);
    return (
        
   <div>
   <Card sx={{ width: "270px",
   height: "170px"
   , position: "relative", left: "50%",
     boxShadow: "3px 3px 10px 3px rgba(0,0,0,0.3)",
     transform: "translateX(-50%)",
     top: "10px", backgroundColor: "unset", background: "linear-gradient(to bottom, rgba(176, 190, 197, 0.3), rgba(120, 144, 156, 1))", borderRadius: "18px",cursor: "pointer" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'white', mb: 0.5, fontSize: 14,opacity: "0.7", textAlign: "left", position: "relative", left: "3px" }}>
          Weather </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5, textAlign: "left", fontSize: "12px", display: "flex", justifyContent: "flex-start" }}><LocationOnIcon sx={{fontSize: "20px"}}/>{capitalizeFirstLetter(info.city)}</Typography>
        <Typography variant="body2" sx={{fontSize: "35px", color: "white", textAlign: "left"}}>
         {info.temp}°
        </Typography>
        <Box sx={{textAlign: "right", position: "relative", bottom: "89px", right: "5px" }}>  
            
            {info.id >= 200 && info.id <= 232 ? 
            <i> <img src={thunderstorm} alt="thunderstorm" width="78" height="78" /></i> 
            : info.id >= 300 && info.id <= 321 ? 
            <i> <img src={drizzle} alt="drizzle" width="78" height="78" /></i> : info.id >= 500 && info.id <= 531 ?
             <i><img src={rain} alt="rain" width="78" height="78" /></i> : info.id >= 600 && info.id <= 622 ? 
             <i><img src={snowflake} alt="snowflake" width="78" height="78" /></i> : info.id >= 701 && info.id <= 781 ?
              <i><img src={haze} alt="haze" width="78" height="78" /></i> : info.id === 800 ?
               <i><img src={sun} alt="sun" width="78" height="78" /></i> : info.id >= 801 && info.id <= 804 ?
                <i><img src={clouds} alt="clouds" width="78" height="78" /></i> : <i> <img src={cloudy} alt="#" width="75" height="75" /> </i> } 
        </Box>
        
         <Typography sx={{ fontSize: "14px", color: "white", opacity: "0.8", textAlign: "center" ,position: "relative", bottom: "85px", left: "72px"}}>
                  {capitalizeFirstLetter(info.weather)}
         </Typography>


      </CardContent>
    </Card>
   </div>
    )
}