import React from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import WeatherInfo from "../Weather/WeatherInfo";
import Info from "../Info/Info";
import Dayscarousel from "../Dayscarousel/Dayscarousel";
import { DataProvider } from "../../weatherData";

// import styles from "./App.module.css"

const App = () => {
  return (
    <DataProvider>
      <div className={styles.container}>
        <div id="container">
          <Header />
          <div className={styles.main}>
            <WeatherInfo />
            <Info />
          </div>
          <div id="day">
            <Dayscarousel />
          </div>
        </div>
      </div>
    </DataProvider>
  );
};

export default App;
