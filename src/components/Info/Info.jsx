import React from "react";
import Details from "../Details/Details";
import { useData } from "../../Hooks/useData";
import styles from "./Info.module.css";
import { Carousel } from "react-bootstrap";

const Info = () => {
  const { data, foreCastData, localTime } = useData();
  if (data !== null && foreCastData !== null && localTime !== null)
    return (
      <div className={styles.details}>
        <div className={styles.nothidden}>
          <Details title="Humidity" value={data.main.humidity + " %"} />
          <Details title="Air Pressure" value={data.main.pressure + " hPa"} />
          <Details title="Wind Speed" value={data.wind.speed + " Km/h"} />
          <Details title="Chance of Precipation" value={foreCastData.daily[0].pop * 100 + " %"} />
        </div>
        <div className={styles.hidden}>
          <Carousel>
            <Carousel.Item>
              <div className={styles.caritem}>
                <Details title="Humidity" value={data.main.humidity + " %"} />
                <Details title="Air Pressure" value={data.main.pressure + " hPa"} />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className={styles.caritem}>
                <Details title="Wind Speed" value={data.wind.speed + " Km/h"} />
                <Details title="Chance of Precipation" value={(foreCastData.daily[0].pop * 100).toPrecision(2) + " %"} />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
};

export default Info;
