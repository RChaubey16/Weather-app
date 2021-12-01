import React from "react";
import "./weather.css";

const api = {
  key: "43fab9d64bf617e959ae5a762f12ed64",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {

    const datebuilder = (d) => {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // Will return a number between 1 and 7 or 0 and 6 for the day as they are between 7 days  
        let day = days[d.getDay()];
        // Will return date between 1 and 31 
        let date = d.getDate();
        // Will return a number between 0 and 11 or 1 and 12 for the month of the year
        let month = months[d.getMonth()];
        // will return full year like 2021
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`; 

    }
 
  return (
    <div className="weather">
      <main>
        <div className="weather__searchBox">
          <input type="text" className="searchBar" placeholder="Search..." />
        </div>

        <div className="weather__locationBox">
            <div className="location">
                New York City, US
            </div>
            <div className="date">{datebuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default Weather;
