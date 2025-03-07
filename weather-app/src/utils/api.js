export const fetchTemperature = async () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const city = 'Guthrie';
    const state = 'OK';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.main.temp; // Return the current temperature
    } catch (error) {
        console.error('Error fetching temperature:', error);
        throw error; // Rethrow the error for handling in the calling function
    }
};