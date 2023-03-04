import React from "react";
import "../../styles/Block.css";
import axios from "axios";
import Card from "./Card";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const Block = ({ location, setLocation }) => {
  const [weather, setWeather] = React.useState([]);
  const [mockLoc, setMockLoc] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=7c57017c6de44027803111521230303&q=${location}`
      )
      .then((data) => {
        setLoading(false);
        return setWeather(data.data);
      });
  }, [location]);

  const handleChanger = (e) => {
    setMockLoc(e.target.value);
  };
  const submitted = (e) => {
    e.preventDefault();
    setLocation(mockLoc);
    setMockLoc("");
  };

  return (
    <div className="block">
      <div className="box">
        <Header
          handleChanger={handleChanger}
          mockLoc={mockLoc}
          submitted={submitted}
        />
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="location-box">
              <div className="location-left">
                <p className="location-text">
                  <b>Region: </b> {weather.location?.name}
                </p>
                <p className="location-text">
                  <b>Country: </b> {weather.location?.country}
                </p>
                <img
                  src={weather.current?.condition.icon}
                  className="location-img"
                  alt="rasm"
                />
                <p className="location-temp">
                  <span className="inner-temp">
                    <b>{weather.current?.temp_c}</b>
                    <sup>o</sup>C
                  </span>
                  {weather.current?.condition.text}
                </p>
                <Link className="weekly-link" to="/weekly">
                  Weekly Weather
                </Link>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Block;
