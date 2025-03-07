// src/app.js
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Guthrie,OK&appid=${apiKey}&units=imperial`;

async function fetchTemperature() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const temperature = data.main.temp;
        document.getElementById('temperature').innerText = `Current Temperature: ${temperature} °F`;
    } catch (error) {
        console.error('Error fetching temperature:', error);
        document.getElementById('temperature').innerText = 'Failed to fetch temperature';
    }
}

document.getElementById('refresh-button').addEventListener('click', fetchTemperature);

// Initial fetch
fetchTemperature();