const apiKey = "452fa1928b74648212ab2fedb6557ae4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";


const locationInput = document.getElementById('locationInput');
const searchButton =  document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const tempeartureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');



searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});
function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            tempeartureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);
        });
        
}