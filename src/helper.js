
let WEATHERAPIURL="http://api.openweathermap.org/data/2.5/weather"
let APIKEY=import.meta.env.VITE_API_KEY

export async function getWeather(city){
    try{
    let response = await fetch(`${WEATHERAPIURL}?q=${city}&appid=${APIKEY}&units=metric`);
    if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
    }
    let responseJson = await response.json();
    return responseJson;
    }catch(err){
        console.log(err)
    }
}