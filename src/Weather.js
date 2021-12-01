import React from "react";
import "./weather.css";

const api = {
  key: "43fab9d64bf617e959ae5a762f12ed64",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  return (
    <div className="weather">
      <main>
        <div className="weather__searchBox">
          <input type="text" className="searchBar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default Weather;
