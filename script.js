
const apiKey="1cc49e574ba3f32ab7de75fcd2d782b6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search-box input");
const searchBtn=document.querySelector(".search-box button");

async function checkWeather(city){
    const respo =await fetch(apiUrl+ city + `&appid=${apiKey}`);
    let data = await respo.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=`Temperature : ${data.main.temp}`+"&deg C";
    document.querySelector(".humid").innerHTML=`Humidity: ${data.main.humidity}`+"%";
    document.querySelector(".pressure").innerHTML=`Pressure: ${data.main.pressure}`;
    document.querySelector(".feels_like").innerHTML=`Feels like : ${data.main.feels_like}`;

let weatherIconSrc;
if (data.weather && data.weather.length > 0) {
    const weatherCode = data.weather[0].icon; // Get the weather icon code
    if (data.main.humidity > 80) {
        weatherIconSrc = "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Thunderstorm icon image source
    } else if (data.main.temp > 15) {
        weatherIconSrc = "https://images.unsplash.com/photo-1572966101025-e199cab72196?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Sunny icon image source
    } else {
        weatherIconSrc = "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Snowflake icon image source
    }
} else {
    weatherIconSrc = ""; 
}

const weatherIconElement = document.querySelector(".weather-icon");
weatherIconElement.src = weatherIconSrc;

}


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});