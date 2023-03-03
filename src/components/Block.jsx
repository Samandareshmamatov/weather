import React from "react";
import "./Block.css";
import axios from "axios";
import Card from "./Card";

const Block = () => {
  const [weather, setWeather] = React.useState([]);
  const [location, setLocation] = React.useState("Tashkent");
  const [mockLoc, setMockLoc] = React.useState("");

  React.useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=7c57017c6de44027803111521230303&q=${location}`
      )
      .then((data) => setWeather(data.data));
  }, []);
  React.useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=7c57017c6de44027803111521230303&q=${location}`
      )
      .then((data) => setWeather(data.data));
  }, [location]);

  const handleChanger = (e) => {
    setMockLoc(e.target.value);
  };
  const submitted = (e) => {
    e.preventDefault();
    setLocation(mockLoc);
    setMockLoc("")
  }
  console.log("weather", weather);
  return (
    <div className="block">
      <div className="box">
        <div className="header-box">
          <h2 className="title">Weather App</h2>
          <form onSubmit={submitted} className="app-form">
            <input
              onChange={handleChanger}
              value={mockLoc}
              className="header-input"
              type="text"
              placeholder="Search location..."
            />
            <button className="btn">Search</button>
          </form>
        </div>
        <div className="location-box">
          <div className="location-left">
            <p className="location-text">
              <b>Region: </b> {weather.location?.name}
            </p>
            <p className="location-text">
              <b>Country: </b> {weather.location?.country}
            </p>
            <img src={weather.current?.condition.icon}  className="location-img" alt="rasm" />
            <p className="location-temp">
              <span className="inner-temp">
                <b>{weather.current?.temp_c}</b>
                <sup>o</sup>C
              </span>
              {weather.current?.condition.text}
            </p>
          </div>
          <div className="location-right">
            <p className="location-right-item">
              Humidity
              <span>{weather.current?.humidity} %</span>
            </p>
            <p className="location-right-item">
              Wind Speed
              <span>{weather.current?.wind_kph} km/h</span>
            </p>
            <p className="location-right-item">
              Air pressure
              <span>{weather.current?.pressure_mb} P</span>
            </p>
          </div>
        </div>
        <div className="card-box">
          <Card location="Paris" />
          <Card location="Cape Town" />
          <Card location="Moscow" />
          <Card location="New york" />
        </div>
      </div>
    </div>
  );
};

export default Block;
