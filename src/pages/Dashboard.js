import React, { useState, useCallback } from "react";
import { api_key } from "../api.json";

function Dashboard() {
  const [currentWeather, setCurrentWeather] = useState(false);
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [ultraViolet, setUltraViolet] = useState({});
  // console.log("currentWeather", currentWeather);
  // console.log("forecast", forecast);

  const getWeather = () => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`;
    // console.log("weatherURL", weatherURL);
    // fetch data from the URL, resolve to json
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("data:", data);
        setCurrentWeather(data);
      });
  };
  const getForecast = () => {
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=${api_key}`;
    fetch(forecastURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("forecast:", data);
        setForecast(data);
      });
  };
  // const getUV = () => {
  //   const lat = currentWeather.coord.lat;
  //   const lon = currentWeather.coord.lon;
  //   const uvURL = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${api_key}`;
  //   fetch(uvURL)
  //   .then((res) => res.json()
  //   .then((data) => {
  //     console.log("UV:", data);
  //     setUltraViolet(data);

  //   })
  //   )
  // }

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
    getForecast();
    // getUV();
  });

  return (
    <div>
      <div className="input-box">
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
          className="btn btn-white btn-animated"
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
        <div className="day-box">
          {currentWeather && (
            <div className="day-card">
              <img src="..." className="day-card-img" alt="weather icon" />
              <div className="card-body">
                <h3 className="card-title">{currentWeather.name}</h3>
                <h5 className="today">Today's Weather:</h5>
                <p className="temperature">
                  Current Temp: {currentWeather.main.temp} F
                </p>
                <p className="temperature">
                  Feels Like: {currentWeather.main.feels_like} F
                </p>
                <p className="hi-temperature">
                  Today's High: {currentWeather.main.temp_max} F
                </p>
                <p className="lo-temperature">
                  Today's Low: {currentWeather.main.temp_min} F
                </p>
                <p className="humidity">
                  Humidity: {currentWeather.main.humidity}%
                </p>
                <p className="wind">
                  Wind Speed:{currentWeather.wind.speed} MPH
                </p>
              </div>
            </div>
          )}
        </div>
        {/* conditional render on one object .map() not used here */};
        <div className="forecast-box">
          <div className="forecast-card">
            {forecast.list
              ? forecast.list.map((weatherItem, idx) => {
                  if (idx % 8 === 4) {
                    return (
                      // forecast card
                      <div key={idx} className="forecast-card-small">
                        <p>Date: {forecast?.list[idx]?.dt_txt.slice(5, 10)}</p>

                        <p>Temp: {forecast?.list[idx]?.main?.temp} F</p>

                        <p>Humidity: {forecast?.list[idx]?.main?.humidity}%</p>
                      </div>
                    );
                  }
                })
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
