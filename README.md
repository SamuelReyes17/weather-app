# ☁️ Real-Time Weather Application

A clean, responsive, and easy-to-use web application designed to fetch and display current weather information for any requested location globally.

## 🎯 Project Overview
This project is a client-side weather forecasting application built using standard web technologies. It allows users to:
* Search by City: Input a city name and retrieve up-to-date weather data.

* Display Key Metrics: Show essential information like temperature, humidity, wind speed, and weather conditions (e.g., sunny, cloudy, rain).

* Visual Feedback: Dynamically update the application's interface and icons to visually reflect the current weather status.

## 🛠️ Methods and Technologies Used

 * HTML (index.html)

  *  Provides the structure and layout of the weather application interface.

  * Semantic Markup & Form Input for user city search.

 * CSS (style.css)

  * Handles the visual presentation, styling, and responsiveness of the app.

  * Responsive Web Design (RWD) principles to ensure usability on different screen sizes. Custom styling for cards and dynamic backgrounds.

* JavaScript (app.js)

 * Manages all application logic, from user input to API interaction and DOM manipulation.

 * Asynchronous fetch API to securely request weather data from an external API (e.g., OpenWeatherMap). DOM Manipulation to dynamically update temperature, city name, and weather icons without reloading the page.

* External API

  * The source of real-time weather information.

  * AJAX/Fetch requests are used to get data, typically passing the user's city name and an API key as query parameters.
