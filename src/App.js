import React from 'react';
import Header from "./Header";
import Current from "./Current";
import Forecast from "./Forecast";

function App() {
  return (
    <div>
      <Header></Header>
      <Current
      // import today's weather data here
      />
      <Forecast
      // import forecast data here
      />
      
    </div>
  )
}

export default App

