import React from "react";
import styles from "./Details.module.css"

const Details = (props) =>{
  const icon = props.title
    return (
      <div className={styles.details}>
        <img preload src={`/Icons/${icon}.svg`} width={35} height={35} alt="" />
        <div className={styles.info}>
          <h3>{props.title}</h3>
          <h1>{props.value}</h1>
        </div>
      </div>
    );
}

export default Details