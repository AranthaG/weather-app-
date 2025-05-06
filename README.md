
# 🌦️ Weather App

This is a simple **JavaScript-based Weather App** that fetches and displays current weather information for any city using the [WeatherAPI](https://www.weatherapi.com/).

---

## 🚀 Features

- 🌍 Search for any city
- 🌡️ Displays temperature (°C)
- 🕒 Shows local date and time
- 📅 Shows the current day of the week
- ☁️ Displays current weather condition (e.g., Mist, Clear, Rain)

---

## 📂 Project Structure

```
weather-app/
├── index.html       # HTML structure
├── style.css        # Basic styling
├── script.js        # Main JavaScript logic
└── README.md        # You're here!
```

---

## ⚙️ How It Works

1. User types a location in the search box
2. JavaScript calls the Weather API using `fetch()`
3. API responds with weather data (JSON)
4. Data is parsed and displayed:
   - Temperature
   - Location
   - Local time + day
   - Weather condition

---

## 🧠 Key Concepts Used

- `fetch()` for API requests
- `async/await` for handling asynchronous data
- DOM manipulation with `document.querySelector()`
- `event.preventDefault()` for form handling
- `.split(' ')` and `new Date().getDay()` for date parsing

---

## 🔑 API Used

- **WeatherAPI**:  
  Endpoint example:  
  ```
  http://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London&aqi=no
  ```

📝 Replace `YOUR_API_KEY` with your actual API key from [weatherapi.com](https://www.weatherapi.com/).

---

## 🛠️ To Run Locally

1. Clone this repo or download the files
2. Open `index.html` in your browser
3. Type a city and press **Search**

---

## 💡 To Improve (optional ideas)

- Add weather icons based on conditions
- Handle error messages (e.g., city not found)
- Convert temperature to Fahrenheit
- Add loading animation

---

## 🧑‍💻 Author

Made with ❤️ by Arantha
