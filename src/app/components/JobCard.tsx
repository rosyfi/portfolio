import React from "react";
import styles from "./styles/JobCard.module.css";
import WorkTimeline from "./WorkTimeline";

interface JobCardProps {
  title: string;
  details: string[];
  location: string;
  logo: string;
  startYear: number;
  startMonth: string;
  endYear: number;
  endMonth: string;
  left: boolean;
}

/**
 * All month dots with the card next to it.
 * @returns
 */
const JobCard: React.FC<JobCardProps> = ({
  title,
  details,
  location,
  logo,
  startYear,
  startMonth,
  endYear,
  endMonth,
  left,
}) => {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: left ? "row-reverse" : "row" }}
    >
      <WorkTimeline
        startYear={startYear}
        startMonth={startMonth}
        endYear={endYear}
        endMonth={endMonth}
        left={left}
      />
      {/* </div>
      <div className={styles.cardContainer} style={{ width: "45%" }}>
        <h2 className={styles.title}>{title}</h2>
        <ul>
          {details.map((detail, i) => (
            <li className={styles.detail} key={i}>
              {detail}
            </li>
          ))}
        </ul>
        <i className={`bi bi-geo-alt-fill ${styles.locationIcon}`}>
          <span className={styles.locationName}>{location}</span>
        </i>
        <img src={logo} alt={`${logo} logo`} className={styles.logo} />
      </div> */}
    </div>
  );
};

export default JobCard;
