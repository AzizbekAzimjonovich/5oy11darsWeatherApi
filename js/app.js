const changeLocation = document.getElementById('change-location');
const card = document.getElementById('card');
const details = document.getElementById('details');
const weatherIcon = document.getElementById('weather-icon');
const overlay = document.getElementById('overlay');
const template = document.querySelector('template');

const updateUI = (weather) => {
    details.innerHTML = `
    <h5 class="mb-3 cityNN">${weather.name}, ${weather.sys.country}</h5>
    <p class="mb-3 cityN">${weather.weather[0].main}</p>
    <div class="display-4 mb-3 div2">
        <span class="temp">${Math.round(weather.main.temp)}</span>
        <span class="degg">&deg;C</span>
    </div>
    `;

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

    weatherIcon.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
};

const getWeather = async (city) => {
    try {
        const data = await getData(city);
        console.log('Weather data:', data);
        updateUI(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};


changeLocation.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = changeLocation.city.value.trim();
    changeLocation.reset();
    getWeather(cityName);
});
