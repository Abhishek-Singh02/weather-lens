import React, { useState } from "react";
import styles from "./Header.module.css"
import { useData } from "../../Hooks/useData";

const Header = () =>{
   const { setURL } = useData();
   const [location,setLocation] = useState('')
   const { data, foreCastData, localTime } = useData();
   if (data !== null && foreCastData !== null && localTime !== null)
     return (
       <div className={styles.header}>
         <div className={styles.logo}>
           <a href="/">
             <img preload src="/images/logo.svg" alt="" height={50} width={50} />
             <h1>WeatherLens</h1>
           </a>
         </div>
         <div className={styles.input}>
           <input
             type="text"
             name="search"
             autoComplete="off"
             value={location}
             placeholder="Enter city name"
             onChange={(event) => {
               setLocation(event.target.value);
             }}
             onKeyPress={(event) => {
               if (event.key === "Enter") {
                 setURL(
                   `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3bce4b93d8b9662fb50a58f4f0945ad1`
                 );
                 setLocation("");
               }
             }}
           />
           <button
             type="Submit"
             onClick={() => {
               setURL(
                 `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3bce4b93d8b9662fb50a58f4f0945ad1`
               );
               setLocation("");
             }}>
             <i className="bi bi-search" />
           </button>
         </div>
       </div>
     );
}

export default Header