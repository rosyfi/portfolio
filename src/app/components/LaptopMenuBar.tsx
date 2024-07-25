"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/LaptopMenuBar.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const LaptopMenuBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return (
    <div className={`container-fluid ${styles.laptopMenuContainer}`}>
      <i className={`bi bi-battery-full ${styles.laptopMenuIcon}`}></i>
      <i className={`bi bi-wifi ${styles.laptopMenuIcon}`}></i>
      <span className={styles.date}>
        {time.toLocaleDateString("en-US", dateOptions).replace(",", "")}
      </span>
      <span className={styles.time}>
        {time.toLocaleTimeString("de-DE", timeOptions)}
      </span>
    </div>
  );
};

export default LaptopMenuBar;
