import React, { useState, useCallback, useEffect } from "react";
import { api_key } from "../api.json";

function Dashboard() {
  const [currentWeather, setCurrentWeather] = useState({ data: [] });
  const [city, setCity] = useState("");

  const getWeather = () => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`;
    console.log("weatherURL", weatherURL);
    // fetch data from the URL, resolve to json
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        setCurrentWeather(data);
      });
  };
  //  recieves input from user and assigns text to value and sets state for URL
  const handleInputChange = (event) => {
    const val = event.target.value;
    setCity(val);
    console.log("city data:", city);
  };
  // is useCallback correct here? Review code with api_key working.
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
      <div>
        {currentWeather.data
        ? currentWeather.data.map((obj) => {
          return (
            <div class="day-card">
              <img src="..." class="day-card-img" alt="weather icon" />
              <div class="card-body">
                <h5 class="card-title">{obj.name}</h5>
                <p class="today">Today is: {obj.dt_txt.slice(5,10)}</p>
                <p class="temperature">Current Temp: {obj.main.temp} F</p>
                <p class="temperature">Feels Like: {obj.main.feels_like} F</p>
                <p class="hi-temperature">Today's High: {obj.main.temp_max} F</p>
                <p class="lo-temperature">Today's Low: {obj.main.temp_min} F</p>
                <p class="humidity">Humidity: {obj.main.humidity}%</p> 
                <p class="wind">Wind Speed:{obj.wind} MPH</p> 
                {/* button to be changed to reflect forecast and corresponding url, functions etc. */}
                {/* <button
          class="form-btn"
          type="submit"
          value={city}
          onClick={(event) => {
            console.log("city input by user:", event.target.value);
            onSubmit(event);
          }}
        >
          Get Forecast!!
        </button>  */}
               
              </div>
            </div>
          );
        })
      : ""}
      </div>
    </div>
  );
}

export default Dashboard;
