const apiKey = "ece05d18a5b622daec9b06788e65b1a8"; // Your OpenWeatherMap API key

// Function to fetch weather data based on city
async function getWeather() {
    const location = document.getElementById('location').value;

    if (!location) {
        alert("Please enter a location.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found.");
            return;
        }

        // Display the weather data
        document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('weather-description').textContent = `Weather: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
    } catch (error) {
        alert("Error fetching weather data.");
    }
}
