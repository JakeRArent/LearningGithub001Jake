# Weather App

This project is a simple web application that displays the current temperature of Guthrie, Oklahoma. It fetches weather data from a weather API and updates the displayed temperature on the webpage.

## Project Structure

```
weather-app
├── public
│   ├── index.html        # Main HTML document
├── src
│   ├── app.js           # Main JavaScript file for application logic
│   ├── styles.css       # CSS styles for the application
│   └── utils
│       └── api.js       # Utility functions for API calls
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Getting Started

To get started with the Weather App, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## API Information

This application uses a weather API to fetch the current temperature for Guthrie, Oklahoma. Make sure to sign up for an API key if required and update the `src/utils/api.js` file with your API key.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.