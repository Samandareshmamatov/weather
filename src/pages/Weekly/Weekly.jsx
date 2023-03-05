import React from "react";
import axios from "axios";
import WeeklyCard from "./WeeklyCard";
import "../../styles/Weekly.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const Weekly = ({ location }) => {
  const [weather, setWeather] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=c7eac69580114e9ea9e104643230503&q=${location},${location}&days=7`
      )
      .then((data) => setWeather(data.data.forecast.forecastday)).catch((error) => setError(error.message));
  }, [location]);
  return (
    <div className="block">
      <div className="box">
        <h1 className="title">Weather App</h1>
        {weather === [] ? (
          <>
            <Loader />
            <p>{error}</p>
          </>
        ) : (
          <>
            <h2 className="weekly-location">{location}</h2>
            <div className="weekly-box">
              {weather?.map((el) => {
                console.log(el);
                return <WeeklyCard data={el} />;
              })}
            </div>
          </>
        )}
        <Link className="weekly-link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Weekly;
