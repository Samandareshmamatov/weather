import React from "react";
import axios from "axios";
import WeeklyCard from "./WeeklyCard";
import "../../styles/Weekly.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const Weekly = ({ location }) => {
  const [weather, setWeather] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=7c57017c6de44027803111521230303&q=${location},${location}&days=7`
      )
      .then((data) => setWeather(data.data.forecast.forecastday));
  }, [location]);
  return (
    <div className="block">
      <div className="box">
        <h1 className="title">Weather App</h1>
        {loading ? (
          <>
          <Loader />
          <p>axcsfscdvfbgtnytbrgffgrtrgefveg</p>
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
          Home Page
        </Link>
      </div>
    </div>
  );
};

export default Weekly;
