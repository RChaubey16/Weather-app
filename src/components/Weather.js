import React, { useState } from "react";
import "./weather.css";

const api = {
  key: "43fab9d64bf617e959ae5a762f12ed64",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  const datebuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // Will return a number between 1 and 7 or 0 and 6 for the day as they are between 7 days
    let day = days[d.getDay()];
    // Will return date between 1 and 31
    let date = d.getDate();
    // Will return a number between 0 and 11 or 1 and 12 for the month of the year
    let month = months[d.getMonth()];
    // will return full year like 2021
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="app__searchBox">
          <input type="text" className="searchBar" placeholder="Search..." 
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}/>
        </div>

        {(typeof weather.main != 'undefined') ? (
          <div>
             <div className="weather__locationBox">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{datebuilder(new Date())}</div>
              </div>

            <div className="weather__box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>

              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default Weather;
