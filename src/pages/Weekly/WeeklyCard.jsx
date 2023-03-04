import React from 'react'

const WeeklyCard = ({data}) => {
  console.log(data);
  return (
    <div className="card">
      <h3>{data?.date}</h3>
      <p>Day : {data?.day.maxtemp_c}<sup> o</sup><span>C</span></p>
      <p>Night : {data?.day.mintemp_c}<sup> o</sup><span>C</span></p>
      <img src={data?.day.condition.icon} alt="icon weather" />
    </div>
  );
}

export default WeeklyCard