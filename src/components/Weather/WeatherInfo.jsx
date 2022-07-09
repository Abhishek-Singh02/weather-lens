import React , {useEffect} from "react";
import styles from "./WeatherInfo.module.css";
import { useData } from "../../Hooks/useData";

const WeatherInfo = () => {
  const { data ,foreCastData, localTime } = useData();
  if (localTime !== null) {
    var lTime = localTime.datetime
    var event = new Date(lTime);
    event.setMinutes(event.getMinutes() - 0.5);
    var currentTime = event.toLocaleTimeString("en-US");
    console.log(currentTime);
  }


  useEffect(() => {
    if (data !== null) {
      
      let time2 = Math.floor(
        new Date().getUTCHours() +
          new Date().getUTCMinutes() / 60 +
          new Date(data.timezone) / 3600
      );

      if (time2 >= 16 && time2 <= 19) {
        document.getElementById(
          `container`
        ).style.backgroundImage = `url(/images/cloudy.jpg)`;
      } else if (time2 > 19 || time2 < 4) {
        document.getElementById(
          `container`
        ).style.backgroundImage = `url(images/night.jpg)`;
      } else if (time2 >= 4 && time2 <= 8) {
        document.getElementById(
          `container`
        ).style.backgroundImage = `url(/images/cloudy.jpg)`;
      } else {
        document.getElementById(
          `container`
        ).style.backgroundImage = `url(/images/default.jpg)`;
      }

      if (
        data.weather[0].description.includes("rain") ||
        data.weather[0].description.includes("thunder") ||
        data.weather[0].description.includes("drizzle")
      ) {
        document.getElementById(
          `container`
        ).style.backgroundImage = `url(/images/Rains.jpg)`;
      }
    }
  }, [data]);
  
   
    if (data !== null && foreCastData !== null && localTime !== null) {
      return (
        <div className={styles.flex}>
          <img
            src={"/images/icons/" + data.weather[0].icon + ".svg"}
            alt="weather_icon"
            height={100}
            width={100}
          />
          <h3>{data.weather[0].description}</h3>
          <h1>{(data.main.temp - 273.5).toPrecision(3)}° C</h1>
          <h2>
            {data.name} , {currentTime}
          </h2>
        </div>
      );
    } else {
      return (
        <div className={styles.ringCenter}>
          <div className={styles.ring}>
            Loading
            <span></span>
          </div>
        </div>
      );
    }
    
  
};
export default WeatherInfo;
