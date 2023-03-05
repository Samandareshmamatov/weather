import React from 'react';
import axios from 'axios';
import "../../styles/Card.css";

const Card = ({location}) => {

    const [weather, setWeather] = React.useState([]);

    React.useEffect(() => {
      axios
        .get(
          `https://api.weatherapi.com/v1/current.json?key=c7eac69580114e9ea9e104643230503&q=${location}`
        )
        .then((data) => setWeather(data.data));
    }, [location]);

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
        <span>
          C{" "}
          {weather.current?.condition.text.length > 23
            ? weather.current?.condition.text.slice(0, 23) + "..."
            : weather.current?.condition.text}
        </span>
      </p>
    </div>
  );
}

export default Card