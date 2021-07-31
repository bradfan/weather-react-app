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
      });
  };
  //  recieves input from user and assigns text to value and sets state
  const handleInputChange = (event) => {
    const val = event.target.value;
    setCity(val);
    console.log("city data:", city);
  };
  // is useCallback correct here? Review code with api_key currently working.
  const onSubmit = useCallback((event) => {
    event.preventDefault();
    console.log("data:", currentWeather);
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
            console.log(event.target.value);
            onSubmit(event);
          }}
        >
          Get Weather!!
        </button>
      </div>

      <div class="card">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="today">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p class="temperature">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p class="humidity">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p class="wind">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p class="index">
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
