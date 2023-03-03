import React from 'react';
import axios from 'axios';
import "./Card.css";

const Card = ({location}) => {

    const [weather, setWeather] = React.useState([]);

    React.useEffect(() => {
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=7c57017c6de44027803111521230303&q=${location}`
        )
        .then((data) => setWeather(data.data));
    }, []);

  return (
    <div className="card">
      <p className="card-name">{weather.location?.name}</p>
      <img
        src={weather.current?.condition.icon}
        className="card-img"
        alt="weather images"
      />
      <p className="card-temp">
        {weather.current?.temp_c}
        <sup> o</sup>
        <span>C {weather.current?.condition.text}</span>
      </p>
    </div>
  );
}

export default Card