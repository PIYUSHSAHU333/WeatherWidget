import MainWeather from "./mainWeather.jsx"
import "./infoBox.css"
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import ExtraInfo from "./ExtraInfo.jsx"
import SideInfo from "./sideinfo.jsx";
import wind from "./assets/wind.png";
import airPressure from "./assets/pressure.png"
export default function InfoBox({info}){
    return(
        
        < div className='infoBox'>

          <MainWeather info={info}/>
          <br />

          <div style={{display: "flex", gap: "14px"}}>
          <ExtraInfo heading= {`Feels like `} weather = {info.weather}info={`${info.feelslike}°`} icon={<AirIcon sx={{fontSize: "15px", position: "relative", bottom: "10px", marginRight: "0.25rem", opacity: "0.7", color: "white"}}/>} /> 
          <ExtraInfo heading={"Humidity "} info={`${info.humidity}%`} icon={<WaterIcon sx={{fontSize: "15px", position: "relative", bottom: "10px", marginRight: "0.25rem", opacity: "0.7", color: "white"}}/>} />
          </div>
           <br />
           <br />
          <div>
            <SideInfo info={`Wind Speed: ${info.windSpeed} m/s`} img={wind}/>
            <SideInfo info={`Air pressure: ${info.airPressure} hPa`} img={airPressure}/>
          </div>
          
        </div>
    
    )
}

