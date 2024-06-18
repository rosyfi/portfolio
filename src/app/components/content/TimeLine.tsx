import React from "react";
import styles from "./styles/TimeLine.module.css";
import { Card } from "./types/Card";

interface TimeLineProps {
  cards: Card[];
}

const TimeLine: React.FC<TimeLineProps> = ({ cards }) => {
  return (
    <div className={styles.timeline}>
      {cards.map((card, index) => (
        <div
          className={styles.card}
          key={index}
          style={{ marginTop: card.marginTop }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>{card.title}</h2>
            <ul>
              {card.details.map((detail, i) => (
                <li className={styles.detail} key={i}>
                  {detail}
                </li>
              ))}
            </ul>
            <i className={`bi bi-geo-alt-fill ${styles.locationIcon}`}>
              <span className={styles.locationName}>{card.location}</span>
            </i>
            <img
              src={card.logo}
              alt={`${card.logo} logo`}
              className={styles.logo}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLine;
