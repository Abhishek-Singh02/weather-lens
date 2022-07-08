import React from "react";
import Card from "../Card/Card";
import styles from "./Dayscarousel.module.css";
import { useData } from "../../Hooks/useData";
import { Carousel } from "react-bootstrap";

const Dayscarousel = () => {
  const { foreCastData, localTime } = useData();
  if (foreCastData !== null && localTime !== null) {
    return (
      <div>
        <div className={styles.nothidden}>
          <div className={styles.carousel}>
            {foreCastData.daily.slice(0, 7).map((data, index) => {
              return <Card prop={data} key={index} />;
            })}
          </div>
        </div>
        <div className={styles.hidden}>
          <Carousel>
            <Carousel.Item className={styles.itemflex}>
              {foreCastData.daily.slice(0, 2).map((data, index) => {
                return <Card prop={data} key={index} />;
              })}
            </Carousel.Item>
            <Carousel.Item className={styles.itemflex}>
              {foreCastData.daily.slice(2, 4).map((data, index) => {
                return <Card prop={data} key={index} />;
              })}
            </Carousel.Item>
            <Carousel.Item className={styles.itemflex}>
              {foreCastData.daily.slice(4, 6).map((data, index) => {
                return <Card prop={data} key={index} />;
              })}
            </Carousel.Item>
            <Carousel.Item className={styles.itemflex}>
              {foreCastData.daily.slice(6, 7).map((data, index) => {
                return <Card prop={data} key={index} />;
              })}
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
};

export default Dayscarousel;
