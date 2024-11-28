import "./App.css";
import { useState } from "react";

const api = {
  key: "875398bf20cafeft6b46o1403180fac",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER  */}
        <h1>Weather App</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
        <p className="Footer">
        This page was coded by{" "}
        <a href="https://github.com/nombusontsele" target="blank">
          Nombuso Ntsele
        </a>
        . It is available on{" "}
        <a
          href="https://github.com/Nombuso28/react-weather-app"
          target="blank"
        >
          GitHub{" "}
        </a>
        and is hosted by{" "}
        <a
          href="https://react-weather-forecaster-pro.netlify.app/"
          target="blank"
        >
          Netlify
        </a>
        .
      </p>
      </header>
    </div>
  );
}

export default App;
