import React from 'react';
import data from "./Dashboard";
import city from "./Dashboard";

function Weather(data) {
    return (
        <div>
            <div class="day-card">
      <img src="..." class="day-card-img" alt="weather icon" />
      <div class="card-body">
        <h5 class="card-title">{data.name}</h5>
        <p class="today">Today's Weather is:{}</p>
        <p class="temperature">Current Temp: {data.main.temp} F</p>
        <p class="temperature">
          Today's High: {data.main.temp_max} F
        </p>
        <p class="temperature">Today's Low: {data.main.temp_min} F</p>
        <p class="humidity">Humidity: {data.main.humidity}%</p>
        <p class="wind">Wind Speed:{data.wind} MPH</p>
        <a href="#" class="btn-card">
          Click for Forecast
        </a>
      </div>
    </div>
            
        </div>
    )
}

export default Weather
