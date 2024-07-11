import React from "react";
import styles from "./styles/Experience.module.css";
import JobCard from "../JobCard";

import cards from "./data/Experience";

const Experience = () => {
  return (
    <div className={`container ${styles.container}`}>
      {/* {Array.from({ length: 8 }).map((_) => (
          <div className={styles.timeLine}></div>
        ))} */}
      <div className={styles.test}></div>
      <div className={styles.test2}>
        {cards.map((card, i) => (
          <JobCard
            key={i}
            title={card.title}
            details={card.details}
            location={card.location}
            logo={card.logo}
            startYear={card.startYear}
            startMonth={card.startMonth}
            endYear={card.endYear}
            endMonth={card.endMonth}
            left={i % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
