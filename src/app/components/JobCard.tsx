import React from "react";
import styles from "./styles/JobCard.module.css";

interface JobCardProps {
  title: string;
  details: string[];
  location: string;
  logo: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  details,
  location,
  logo,
}) => {
  return (
    <div className={styles.container}>
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
  );
};

export default JobCard;
