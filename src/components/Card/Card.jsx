import React from "react";
import styles from "./Card.module.css";

const Card = ({ prop }) => {
  const splitDisplayName = prop.weather[0].description.split(" ");
  const length = splitDisplayName.length - 1;
  var weather_description =
    splitDisplayName[0] + " " + splitDisplayName[length];
  if (weather_description.includes("very")) {
    weather_description = weather_description.replace("very", "heavy");
  }
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(prop.dt * 1000);
  const currentDate = date.getDate();
  const day = weekday[date.getDay()];
  return (
    <div className={styles.card}>
      <h3>
        {day.slice(0, 3)} , {currentDate}
      </h3>
      <h1>{(prop.main.temp - 273.5).toPrecision(3) + "° C"}</h1>
      <h4> Feels like {(prop.main.feels_like - 273.5).toPrecision(3)}° C</h4>
      <h5>{weather_description}</h5>
    </div>
  );
};
export default Card;
