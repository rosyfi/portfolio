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
    <div className={styles.container}>
      {!left && (
        <WorkTimeline
          startYear={startYear}
          startMonth={startMonth}
          endYear={endYear}
          endMonth={endMonth}
          left={left}
        />
      )}
      <div className={styles.cardContainer}>
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
      </div>
      {left && (
        <WorkTimeline
          startYear={startYear}
          startMonth={startMonth}
          endYear={endYear}
          endMonth={endMonth}
          left={left}
        />
      )}
    </div>
  );
};

export default JobCard;
