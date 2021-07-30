import React from "react";
// import { api_key } from "../api.json";

function Dashboard() {
  return (
    <div>
      <div class="input-box">
        <input
          className="input-window"
          //   value={city}
          //   onChange={handleInputChange}
          name="text"
        
          type="text"
          placeholder="Enter City"
          aria-label="Search"
        />
        
        <button 
        class="btn btn-white btn-animated"
        type="submit"
        // onClick={(event) => {
        //   console.log(event.target.value);
        //   handleSubmit(event);
        // }}
        >
            Get Weather!!</button>

      </div>
    </div>
  );
}

export default Dashboard;
