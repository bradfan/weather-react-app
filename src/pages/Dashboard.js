import React, { useState, useCallback } from "react";
import { api_key } from "../api.json";

function Dashboard() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [city, setCity] = useState("");

  const getWeather = () => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`;
    console.log("weatherURL", weatherURL);
    // fetch data from the URL, resolve to json
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        setCurrentWeather(data);
        console.log("data:", data);
      });
  };
  //  recieves input from user and assigns text to value and sets state for URL
  const handleInputChange = (event) => {
    const val = event.target.value;
    setCity(val);
    console.log("city data:", city);
  };
  // is useCallback correct here? Review code with api_key currently working.
  const onSubmit = useCallback((event) => {
    event.preventDefault();
    console.log("currentWeather:", currentWeather);
    getWeather();
  });

  return (
    <div>
      <div class="input-box">
        <input
          className="input-window"
          value={city}
          onChange={handleInputChange}
          name="text"
          type="text"
          placeholder="Enter City"
          aria-label="Search"
        />

        <button
          class="btn btn-white btn-animated"
          type="submit"
          value={city}
          onClick={(event) => {
            console.log("city input by user:", event.target.value);
            onSubmit(event);
          }}
        >
          Get Weather!!
        </button>
      </div>

      <div class="day-card">
        {/* <img src=`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png` class="day-card-img" alt="weather icon" /> */}
        <div class="card-body">
          <h5 class="card-title">{currentWeather.name}</h5>
          <p class="today">Today's Weather is:{}</p>
          <p class="temperature">Current Temp: {currentWeather.main.temp} F</p>
          <p class="temperature">Today's High: {currentWeather.main.temp_max} F</p>
          <p class="temperature">Today's Low: {currentWeather.main.temp_min} F</p>
          <p class="humidity">Humidity: {currentWeather.main.humidity}%</p>
          <p class="wind">Wind Speed:{currentWeather.wind} MPH</p>
          <p class="index">UV Index:
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn-card">
            Click for Forecast
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
