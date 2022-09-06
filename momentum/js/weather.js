const weatherIcon = document.querySelector('.weather-icon');
const weatherTemperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

if (!localStorage.getItem("city")) {
    city.value = 'Minsk';
} else if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
};

let language = '';

let link = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=24ecd31bd4477ba754c5712f004e1a1f&units=metric`;

city.addEventListener('blur', () => {
    link = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=24ecd31bd4477ba754c5712f004e1a1f&units=metric`;
    getWeather();
});

async function getWeather (lang = 'en') {
    window.addEventListener('load', pullMemory);
    
    const result = await fetch(link);
    const data = await result.json();

    language = lang;
    link = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=24ecd31bd4477ba754c5712f004e1a1f&units=metric`;
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherTemperature.innerHTML = `${Math.round(data.main.temp)} °C`;
    weatherDescription.innerHTML = data.weather[0].description;
    wind.innerHTML = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    window.addEventListener('beforeunload', pushMemory);
}

function pushMemory() {
	localStorage.setItem("city", city.value);
}

function pullMemory() {
	if (localStorage.getItem("city")) {
		city.value = localStorage.getItem("city");
	}
}

export default getWeather();