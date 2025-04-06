# 🌤️ Weather App

A responsive weather forecast app built with **React** that fetches real-time data from the **OpenWeatherMap API**. Users can enter any city and get live weather info like temperature, condition, humidity, wind speed, gusts, and more.


## 🔧 Tech Stack

- **React.js**
- **Tailwind CSS**
- **OpenWeatherMap API**


## ✨ Features

- 🌍 Search weather by city
- 🌡️ View temperature in Celsius
- 🌤️ Weather condition description
- 💨 Wind speed and gust info
- 💧 Humidity and atmospheric pressure
- 📱 Mobile responsive design
- 📌 Displays latitude & longitude of the location


## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/vinubas218/WeatherPredictions.git

### 2.  Install dependencies

npm install

### 3. Add your OpenWeatherMap API key

Open Weather.jsx and replace the appid value with your own API key from openweathermap.org.

const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`);

### 4. Start the development server

npm run dev
