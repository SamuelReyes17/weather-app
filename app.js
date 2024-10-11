const apiKey = "0a474a07c6a36e4c1710ab4943273960";
const apiUrlBase = "https://api.openweathermap.org/data/2.5/weather?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const apiUrl = apiUrlBase + `q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
        // Handle errors, e.g., display an error message to the user
        console.error("Error fetching weather data:", response.status);
        return;
    }

    const data = await response.json(); 
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images2/clouds.png"
    } 
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images2/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images2/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images2/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images2/mist.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images2/snow.png"
    }
    else if (data.weather[0].main == "Wind") {
        weatherIcon.src = "images2/wind.png"
    }
    else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "images2/humidity.png"
    }
    

}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

// Remove this line: checkWeather();