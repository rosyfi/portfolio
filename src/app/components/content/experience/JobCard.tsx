import React from "react";
import styles from "../../../styles/content/experience/JobCard.module.css";
import Image from "next/image";

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
      <div className={styles.content}>
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
        <Image
          width={"100"}
          height={"100"}
          src={`/logo/${logo}.png`}
          alt={logo}
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export default JobCard;
