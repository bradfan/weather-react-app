import React, { useState, useCallback } from "react";
import { api_key } from "../api.json";

function Dashboard() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [city, setCity] = useState("");

  const getWeather = () => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=imperial`;
    fetch(weatherURL)
      .then((res) => res.json())
      .then((data) => {
        console.log("weather:", data);
        setCurrentWeather(data);
      });
  };
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
    </div>
  );
}

export default Dashboard;
